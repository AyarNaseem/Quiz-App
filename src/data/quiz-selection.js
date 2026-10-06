import { shuffle } from './questions.js'

// Prefer questions not seen in the last quiz, then randomize their display order.
// Answer IDs remain stable so translations and shuffling never change correctness.
export function createQuiz(pool, count, previousIds = [], random = Math.random) {
  const previous = new Set(previousIds)
  const fresh = shuffle(pool.filter(question => !previous.has(question.id)), random)
  const seen = shuffle(pool.filter(question => previous.has(question.id)), random)
  const selected = shuffle([...fresh, ...seen].slice(0, count), random)
  if (selected.length > 1 && selected[0].id === previousIds[0]) {
    selected.push(selected.shift())
  }
  return selected.map(question => ({ ...question, options: shuffle(question.options, random) }))
}
