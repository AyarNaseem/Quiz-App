import { useEffect, useRef, useState } from 'react'
import { categories } from '../data/questions'
import { copy, formatNumber } from '../data/translations'
import Icon from './Icon'

function scrollBehavior() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
}

export default function Quiz({ session, lang, onFinish, onHome, onRetry, onExit }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const titleRef = useRef(null)
  const actionRef = useRef(null)
  const t = copy[lang]
  const number = value => formatNumber(value, lang)
  const question = session.questions[index]
  const checked = answers.length > index
  const score = answers.filter(a => a.correct).length
  const category = categories.find(c => c.id === question.category)

  // Scroll after React renders the new question, without a competing focus scroll.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      titleRef.current?.focus({ preventScroll: true })
      titleRef.current?.scrollIntoView({ block: 'start', behavior: scrollBehavior() })
    })
    return () => cancelAnimationFrame(frame)
  }, [index, result])

  // Reveal the inline controls only when they fall below the screen.
  useEffect(() => {
    if (selected === null || result) return
    const frame = requestAnimationFrame(() => {
      const action = actionRef.current?.getBoundingClientRect()
      if (!action) return
      const distance = action.bottom - window.innerHeight + 16
      if (distance > 0) window.scrollBy({ top: distance, behavior: scrollBehavior() })
    })
    return () => cancelAnimationFrame(frame)
  }, [selected, checked, result])

  function check() {
    if (selected === null || checked) return
    setAnswers([...answers, { question, selected, correct: selected === question.answer }])
  }

  function next() {
    if (!checked) return
    if (index === session.questions.length - 1) {
      const summary = {
        score,
        total: session.questions.length,
        seconds: Math.max(1, Math.round((Date.now() - session.started) / 1000)),
      }
      setResult({ ...summary, saved: onFinish(summary) })
    } else {
      setIndex(index + 1)
      setSelected(null)
    }
  }

  if (result) {
    const percent = Math.round(result.score / result.total * 100)
    return <div className="quiz-page">
      <section className="results-panel panel">
        <span className="result-trophy"><Icon name="trophy" /></span>
        <span className="eyebrow">{t.results}</span>
        <h1 className="quiz-scroll-heading" tabIndex={-1} ref={titleRef}>{t.finishTitle}</h1>
        <p>{t.finishText}</p>
        <div className="score-ring" style={{ '--score': `${percent}%` }}>
          <div><strong>{number(percent)}%</strong><span>{t.accuracy}</span></div>
        </div>
        <h3>{percent >= 80 ? t.excellent : percent >= 50 ? t.good : t.practice}</h3>
        <div className="result-metrics">
          <div><strong><bdi>{number(result.score)}/{number(result.total)}</bdi></strong><span>{t.correctAnswers}</span></div>
          <div><strong>{number(result.total)}</strong><span>{t.answered}</span></div>
          <div><strong><bdi>{number(Math.floor(result.seconds / 60))}:{number(result.seconds % 60).padStart(2, lang === 'ku' ? '٠' : '0')}</bdi></strong><span>{t.timeSpent}</span></div>
        </div>
        <div className="result-actions">
          <button className="primary-button" onClick={onRetry}>{t.tryAgain}<Icon name="arrow" /></button>
          <button className="secondary-button" onClick={onHome}>{t.exploreMore}</button>
        </div>
        <small>{result.saved ? t.saved : t.notSaved}</small>
      </section>
      <section className="answer-review">
        <h2>{t.review}</h2>
        {answers.map((a, i) => <article className="review-card panel" key={a.question.id}>
          <span className={`review-number ${a.correct ? 'is-correct' : 'is-wrong'}`}><Icon name={a.correct ? 'check' : 'close'} /></span>
          <div>
            <h3>{number(i + 1)}. {a.question.prompt[lang]}</h3>
            {!a.correct && <p className="wrong-text">{t.yourAnswer}: {a.question.options.find(o => o.id === a.selected)?.text[lang]}</p>}
            <p className="correct-text">{t.correctAnswer}: {a.question.options.find(o => o.id === a.question.answer).text[lang]}</p>
            <p>{a.question.explanation[lang]}</p>
          </div>
        </article>)}
      </section>
    </div>
  }

  return <div className="quiz-page">
    <button className="text-button back-button" onClick={onExit}><Icon name="arrow" />{t.back}</button>
    <div className="quiz-page-heading">
      <div>
        <span className="eyebrow">{session.daily ? t.dailyTitle : category.name[lang]}</span>
        <h1>{t.question} {number(index + 1)} <span>{t.of} {number(session.questions.length)}</span></h1>
      </div>
      <span className="score-chip"><Icon name="trophy" />{t.score}: {number(score)}</span>
    </div>
    <div className="progress-track" role="progressbar" aria-label={t.progress} aria-valuemin={0} aria-valuemax={session.questions.length} aria-valuenow={answers.length}>
      <div style={{ width: `${answers.length / session.questions.length * 100}%` }} />
    </div>
    <section className="question-panel panel">
      <div className="question-meta">
        <span className="pill">{category.name[lang]}</span>
        <span className={`difficulty-tag ${question.level}`}>{t[question.level]}</span>
      </div>
      <div className="question-content">
        <h2 className="quiz-scroll-heading" ref={titleRef} tabIndex={-1}>{question.prompt[lang]}</h2>
        <p className="answer-instruction">{t.chooseAnswer}</p>
        <div className="answer-options">
          {question.options.map((o, i) => <button key={o.id} disabled={checked} aria-pressed={selected === o.id}
            className={`answer-option ${selected === o.id ? 'picked' : ''} ${checked && o.id === question.answer ? 'is-correct' : ''} ${checked && selected === o.id && o.id !== question.answer ? 'is-wrong' : ''}`}
            onClick={() => setSelected(o.id)}>
            <span className="option-letter">{lang === 'ku' ? ['ا', 'ب', 'پ', 'ت'][i] : 'ABCD'[i]}</span>
            <span>{o.text[lang]}</span>
            <span className="option-status">
              {checked && o.id === question.answer ? <Icon name="check" /> : checked && selected === o.id ? <Icon name="close" /> : <span className="radio-dot" />}
            </span>
          </button>)}
        </div>
        {checked && <div className={`answer-feedback ${selected === question.answer ? 'success' : 'learning'}`} role="status">
          <strong><Icon name={selected === question.answer ? 'check' : 'bulb'} />{selected === question.answer ? t.correct : t.incorrect}</strong>
          <span className="tiny-label">{t.explanation}</span>
          <p>{question.explanation[lang]}</p>
        </div>}
          <div ref={actionRef} className="question-footer">
            <span><Icon name="bulb" />{t.noPressure}</span>
            {checked ? <button className="primary-button" onClick={next}>
              {index === session.questions.length - 1 ? t.seeResults : t.nextQuestion}<Icon name="arrow" />
            </button> : <button className="primary-button" disabled={selected === null} onClick={check}>
              {t.checkAnswer}<Icon name="check" />
            </button>}
          </div>
      </div>
    </section>
  </div>
}
