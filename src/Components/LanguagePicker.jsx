import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

const languages = [
  { id: 'en', name: 'English', dir: 'ltr' },
  { id: 'ku', name: 'کوردیی ناوەندی', dir: 'rtl' },
]

export default function LanguagePicker({ value, onChange, label }) {
  const [open, setOpen] = useState(false)
  const root = useRef(null)
  const trigger = useRef(null)
  const menu = useRef(null)

  useEffect(() => {
    if (!open) return
    menu.current?.querySelector('[aria-selected="true"]')?.focus()
    function outside(event) {
      if (!root.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [open])

  function choose(language) {
    onChange(language)
    setOpen(false)
    trigger.current?.focus()
  }

  function handleKeys(event) {
    const options = [...menu.current.querySelectorAll('[role="option"]')]
    const index = options.indexOf(document.activeElement)
    if (event.key === 'Escape') {
      event.preventDefault()
      setOpen(false)
      trigger.current?.focus()
    } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault()
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length
      options[next].focus()
    }
  }

  return <div ref={root} className="language-picker" onBlur={event => {
    if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
  }}>
    <button ref={trigger} className="language-trigger" aria-label={label} aria-haspopup="listbox" aria-expanded={open} aria-controls="language-options" onClick={() => setOpen(!open)} onKeyDown={event => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') { event.preventDefault(); setOpen(true) }
    }}><Icon name="globe" /><span>{value === 'en' ? 'English' : 'کوردی'}</span><span className="select-chevron" /></button>
    {open && <div ref={menu} id="language-options" className="language-menu" role="listbox" aria-label={label} onKeyDown={handleKeys}>
      {languages.map(language => <button key={language.id} role="option" aria-selected={value === language.id} className="language-option" onClick={() => choose(language.id)}>
        <span dir={language.dir}>{language.name}</span>{value === language.id && <Icon name="check" />}
      </button>)}
    </div>}
  </div>
}
