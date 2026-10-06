import { useEffect, useRef, useState } from 'react'
import { categories, questions, shuffle } from './data/questions'
import { copy } from './data/translations'
import Icon from './Components/Icon'
import Quiz from './Components/Quiz'
import './App.css'

function read(key, fallback, validate = value => typeof value === typeof fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value !== null && validate(value) ? value : fallback } catch { return fallback }
}

function legacy(key) {
  try { return localStorage.getItem(key) === 'true' } catch { return false }
}

export default function App() {
  const [lang, setLang] = useState(() => read('quiz-language', legacy('kurdishMode') ? 'ku' : 'en', value => ['en', 'ku'].includes(value)))
  const [dark, setDark] = useState(() => read('quiz-dark', legacy('darkMode')))
  const [history, setHistory] = useState(() => read('quiz-history', [], value => Array.isArray(value) && value.every(item => item && Number.isInteger(item.score) && Number.isInteger(item.total) && item.total > 0 && item.score >= 0 && item.score <= item.total && ['all', ...categories.map(c => c.id)].includes(item.category) && ['all', 'easy', 'medium', 'hard'].includes(item.level) && !Number.isNaN(Date.parse(item.date)))))
  const [view, setView] = useState('explore')
  const [category, setCategory] = useState('all')
  const [level, setLevel] = useState('all')
  const [count, setCount] = useState(10)
  const [search, setSearch] = useState('')
  const [session, setSession] = useState(null)
  const [showExit, setShowExit] = useState(false)
  const exitTrigger = useRef(null)
  const t = copy[lang]
  const pool = questions.filter(q => (category === 'all' || q.category === category) && (level === 'all' || q.level === level))
  const actualCount = Math.min(count, pool.length)
  const completed = history.length
  const answered = history.reduce((sum, item) => sum + item.total, 0)
  const correct = history.reduce((sum, item) => sum + item.score, 0)
  const accuracy = answered ? Math.round(correct / answered * 100) : 0

  useEffect(() => {
    document.documentElement.lang = lang === 'ku' ? 'ckb' : 'en'
    document.documentElement.dir = lang === 'ku' ? 'rtl' : 'ltr'
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try {
      localStorage.setItem('quiz-language', JSON.stringify(lang))
      localStorage.setItem('quiz-dark', JSON.stringify(dark))
    } catch { /* Preferences still work when browser storage is unavailable. */ }
  }, [lang, dark])

  function start(daily = false) {
    let selected = pool
    if (daily) {
      const day = new Date().toLocaleDateString('en-CA')
      let seed = [...day].reduce((a, c) => (Math.imul(a, 31) + c.charCodeAt(0)) >>> 0, 0)
      const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296 }
      selected = shuffle(questions, random).slice(0, 10)
    } else selected = shuffle(selected).slice(0, actualCount)
    setSession({ questions: selected.map(q => ({ ...q, options: shuffle(q.options) })), category: daily ? 'all' : category, level: daily ? 'all' : level, daily, started: Date.now() })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function finish(result) {
    const updated = [{ ...result, category: session.category, level: session.level, daily: session.daily, date: new Date().toISOString(), id: Date.now() }, ...history]
    setHistory(updated)
    setSession(current => ({ ...current, completed: true }))
    try { localStorage.setItem('quiz-history', JSON.stringify(updated)); return true } catch { return false }
  }

  function navigate(next) {
    if (session && !session.completed) { requestExit(next); return }
    setSession(null)
    setView(next)
  }

  function requestExit(next) {
    exitTrigger.current = document.activeElement
    setShowExit(next)
  }

  const selectedCategory = categories.find(c => c.id === category)
  const visibleCategories = categories.filter(c => `${c.name[lang]} ${c.description[lang]}`.toLowerCase().includes(search.toLowerCase()))

  return <div className="app-shell">
    <aside className="sidebar" inert={!!showExit}>
      <button className="brand" onClick={() => navigate('explore')} aria-label={t.home}><span className="brand-symbol"><Icon name="spark" /></span>quiz<span className="brand-dot">.</span></button>
      <span className="sidebar-label">{t.workspace}</span>
      <nav aria-label={t.navigation}>
        <button className={view === 'explore' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('explore')}><Icon name="grid" />{t.explore}<span className="nav-dot" /></button>
        <button className={view === 'progress' ? 'nav-link active' : 'nav-link'} onClick={() => navigate('progress')}><Icon name="chart" />{t.progress}</button>
      </nav>
      <div className="sidebar-tip"><span className="tip-icon"><Icon name="bulb" /></span><h3>{t.tipTitle}</h3><p>{t.tipText}</p><span className="tiny-label">{t.littleEveryDay}</span></div>
      <div className="sidebar-bottom"><span className="avatar">Q</span><div><strong>{t.curiousMind}</strong><small>{t.personalSpace}</small></div><span className="status-dot" /></div>
    </aside>
    <div className="main-shell" inert={!!showExit}>
      <header className="topbar"><div className="breadcrumb">{t.workspace}<span>/</span><strong>{session ? t.quiz : view === 'progress' ? t.progress : t.explore}</strong></div><div className="top-controls"><label className="language-control"><Icon name="globe" /><select aria-label={t.language} value={lang} onChange={e => setLang(e.target.value)}><option value="en">English</option><option value="ku">کوردی</option></select></label><button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? t.lightTheme : t.darkTheme}><Icon name={dark ? 'sun' : 'moon'} /></button><span className="top-avatar">Q</span></div></header>
      <main>
        {session ? <Quiz key={session.started} session={session} lang={lang} onFinish={finish} onHome={() => setSession(null)} onRetry={() => start(session.daily)} onExit={() => requestExit('explore')} /> : view === 'progress' ? <>
          <div className="page-heading"><div><span className="eyebrow">{t.yourJourney}</span><h1>{t.progress}</h1><p>{t.progressIntro}</p></div><span className="heading-icon"><Icon name="chart" /></span></div>
          <Stats t={t} completed={completed} answered={answered} accuracy={accuracy} />
          <section className="panel history-panel"><div className="section-heading"><h2>{t.recentQuizzes}</h2><span className="pill">{completed} {t.completed}</span></div>{!history.length ? <div className="empty-state"><Icon name="trophy" /><h3>{t.noHistory}</h3><p>{t.noHistoryText}</p><button className="primary-button" onClick={() => setView('explore')}>{t.explore}<Icon name="arrow" /></button></div> : <div className="history-list">{history.map(item => <div className="history-row" key={item.id}><span className="category-icon small" data-color={categories.find(c => c.id === item.category)?.color || 'lime'}><Icon name={categories.find(c => c.id === item.category)?.icon || 'spark'} /></span><div><strong>{item.daily ? t.dailyTitle : item.category === 'all' ? t.mixed : categories.find(c => c.id === item.category)?.name[lang]}</strong><small>{new Date(item.date).toLocaleDateString(lang === 'ku' ? 'ckb' : 'en', { month: 'short', day: 'numeric' })} · {t[item.level]} · {item.total} {t.questions}</small></div><span className="history-score">{item.score}/{item.total}</span><span className="pill">{Math.round(item.score / item.total * 100)}%</span></div>)}</div>}</section>
        </> : <>
          <div className="page-heading"><div><span className="eyebrow">{t.welcome}</span><h1>{t.headline}<span className="inline-spark">✳</span></h1><p>{t.intro}</p></div><span className="edition"><span className="status-dot" />{t.readyToLearn}</span></div>
          <section className="hero"><div className="hero-copy"><span className="hero-tag"><span />{t.stayCurious}</span><h2>{t.heroLine1}<br /><span>{t.heroLine2}</span></h2><p>{t.heroText}</p><button className="dark-button" onClick={() => start(true)}>{t.dailyButton}<Icon name="arrow" /></button><div className="hero-meta"><span><Icon name="clock" />{t.fiveMinutes}</span><span><Icon name="layers" />10 {t.questions}</span></div></div><div className="hero-art" aria-hidden="true"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="art-star star-one">✦</span><span className="art-star star-two">✳</span><div className="floating-label label-one"><span>✓</span>{t.newDiscoveries}</div><div className="question-tile tile-back">?</div><div className="question-tile tile-front">?</div><div className="floating-label label-two"><Icon name="bolt" />{t.brainPower}</div><span className="art-dot" /></div></section>
          <Stats t={t} completed={completed} answered={answered} accuracy={accuracy} />
          <div className="explore-layout"><section className="category-section"><div className="section-heading"><div><h2>{t.findTopic}</h2><p>{t.topicSubtitle}</p></div><span className="text-count">06 {t.categories}</span></div><label className="search-box"><Icon name="search" /><input value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search} aria-label={t.search} />{search && <button onClick={() => setSearch('')} aria-label={t.clear}><Icon name="close" /></button>}</label><div className="category-grid">{visibleCategories.map(c => <button className={`category-card ${category === c.id ? 'selected' : ''}`} key={c.id} onClick={() => setCategory(category === c.id ? 'all' : c.id)} aria-pressed={category === c.id}><div className="category-top"><span className="category-icon" data-color={c.color}><Icon name={c.icon} /></span><span className="card-select">{category === c.id ? <Icon name="check" /> : <Icon name="arrow" />}</span></div><h3>{c.name[lang]}</h3><p>{c.description[lang]}</p><div className="card-bottom"><span>{questions.filter(q => q.category === c.id).length} {t.questions}</span><span className="level-bars"><i /><i /><i /></span></div></button>)}</div>{!visibleCategories.length && <div className="empty-state"><p>{t.noTopics}</p><button className="text-button" onClick={() => setSearch('')}>{t.clear}</button></div>}</section>
          <aside className="quiz-builder panel"><div className="builder-heading"><span className="mini-icon"><Icon name="sliders" /></span><div><h2>{t.yourQuiz}</h2><p>{t.makeItYours}</p></div></div><div className="builder-field"><label htmlFor="category">{t.topic}</label><select id="category" value={category} onChange={e => setCategory(e.target.value)}><option value="all">{t.mixed}</option>{categories.map(c => <option value={c.id} key={c.id}>{c.name[lang]}</option>)}</select></div><div className="builder-field"><span className="field-label">{t.difficulty}</span><div className="difficulty-options">{['all', 'easy', 'medium', 'hard'].map(l => <button key={l} className={level === l ? 'chosen' : ''} aria-pressed={level === l} onClick={() => setLevel(l)}>{t[l]}</button>)}</div><small>{t[`${level}Hint`]}</small></div><div className="builder-field"><span className="field-label">{t.quizLength}</span><div className="length-options">{[5, 10, 20].map(n => <button key={n} className={count === n ? 'chosen' : ''} onClick={() => setCount(n)} aria-pressed={count === n}>{n}</button>)}</div></div><div className="quiz-summary"><span><Icon name="layers" />{actualCount} {t.questions}</span><span><Icon name="clock" />~{Math.max(1, Math.ceil(actualCount / 2))} {t.minutes}</span></div>{actualCount < count && <p className="pool-note">{t.availableNote.replace('{n}', actualCount)}</p>}<button className="primary-button start-button" disabled={!actualCount} onClick={() => start()}>{t.startQuiz}<Icon name="arrow" /></button><p className="builder-footnote"><Icon name="check" />{t.noPressure}</p><div className="builder-note"><strong>{selectedCategory ? selectedCategory.name[lang] : t.aLittleEverything}</strong><p>{t.builderNote}</p></div></aside></div>
        </>}
        <footer><span>quiz<span className="brand-dot">.</span> <span className="footer-divider">/</span> {t.footer}</span><span>{t.madeForCuriosity}</span></footer>
      </main>
    </div>
    {showExit && <ExitDialog t={t} returnFocus={exitTrigger.current} onCancel={() => setShowExit(false)} onLeave={() => { setSession(null); setView(showExit); setShowExit(false) }} />}
  </div>
}

function ExitDialog({ t, onCancel, onLeave, returnFocus }) {
  const dialogRef = useRef(null)
  useEffect(() => {
    dialogRef.current?.querySelector('button')?.focus()
    return () => { requestAnimationFrame(() => returnFocus?.focus()) }
  }, [returnFocus])
  function handleKey(event) {
    if (event.key === 'Escape') onCancel()
    if (event.key === 'Tab') {
      const buttons = [...dialogRef.current.querySelectorAll('button')]
      const current = buttons.indexOf(document.activeElement)
      event.preventDefault()
      buttons[(current + (event.shiftKey ? -1 : 1) + buttons.length) % buttons.length].focus()
    }
  }
  return <div className="modal-backdrop"><section ref={dialogRef} onKeyDown={handleKey} className="modal panel" role="dialog" aria-modal="true" aria-labelledby="exit-title" aria-describedby="exit-description"><h2 id="exit-title">{t.exitTitle}</h2><p id="exit-description">{t.exitText}</p><div className="modal-actions"><button className="primary-button" onClick={onCancel}>{t.keepPlaying}</button><button className="secondary-button" onClick={onLeave}>{t.leaveQuiz}</button></div></section></div>
}

function Stats({ t, completed, answered, accuracy }) {
  return <div className="stats-grid">{[{ icon: 'trophy', value: completed, label: t.quizzesCompleted, hint: t.keepGoing }, { icon: 'target', value: `${accuracy}%`, label: t.accuracy, hint: t.everyAnswerCounts }, { icon: 'book', value: questions.length, label: t.questionsToExplore, hint: `${answered} ${t.answersSoFar}` }].map(s => <div className="stat" key={s.icon}><span className="stat-icon"><Icon name={s.icon} /></span><div><div className="stat-value">{s.value}<span>{s.label}</span></div><small>{s.hint}</small></div></div>)}</div>
}
