import test from 'node:test'
import assert from 'node:assert/strict'
import { questions, categories, shuffle } from '../src/data/questions.js'
import { copy, formatNumber } from '../src/data/translations.js'
import { createQuiz } from '../src/data/quiz-selection.js'

test('every question has complete bilingual content and one unambiguous answer', () => {
  assert.ok(questions.length >= 216)
  assert.equal(new Set(questions.map(q => q.id)).size, questions.length)
  assert.equal(new Set(questions.map(q => q.prompt.en)).size, questions.length)
  for (const q of questions) {
    assert.ok(categories.some(c => c.id === q.category), q.id)
    assert.ok(['easy', 'medium', 'hard'].includes(q.level), q.id)
    assert.equal(q.options.length, 4, q.id)
    assert.equal(q.options.filter(o => o.id === q.answer).length, 1, q.id)
    for (const language of ['en', 'ku']) {
      assert.ok(q.prompt[language]?.trim(), q.id)
      assert.ok(q.explanation[language]?.trim(), q.id)
      assert.ok(q.options.every(o => o.text[language]?.trim()), q.id)
      assert.equal(new Set(q.options.map(o => o.text[language])).size, 4, q.id)
    }
  }
})

test('every category and difficulty supports at least twelve distinct questions', () => {
  for (const category of categories) {
    for (const level of ['easy', 'medium', 'hard']) {
      const pool = questions.filter(q => q.category === category.id && q.level === level)
      assert.ok(pool.length >= 12, category.id + ' / ' + level)
      const quiz = shuffle(pool).slice(0, 5)
      assert.equal(new Set(quiz.map(q => q.id)).size, 5)
    }
  }
})

test('repeat quizzes prefer unseen questions and keep answers correct', () => {
  const pool = questions.filter(q => q.category === 'science' && q.level === 'easy')
  const first = createQuiz(pool, 5, [], () => 0.25)
  const previousIds = first.map(q => q.id)
  const second = createQuiz(pool, 5, previousIds, () => 0.25)
  assert.ok(second.every(q => !previousIds.includes(q.id)))
  assert.equal(new Set(second.map(q => q.id)).size, 5)
  for (const question of second) {
    const original = pool.find(q => q.id === question.id)
    assert.equal(question.options.find(o => o.id === question.answer).text.en,
      original.options.find(o => o.id === original.answer).text.en)
  }
})

test('full-pool retries change the first question even with identical random input', () => {
  const pool = questions.filter(q => q.category === 'math' && q.level === 'hard')
  const original = JSON.stringify(pool)
  const first = createQuiz(pool, 20, [], () => 0.5)
  const second = createQuiz(pool, 20, first.map(q => q.id), () => 0.5)
  assert.equal(second.length, pool.length)
  assert.notEqual(first[0].id, second[0].id)
  assert.deepEqual(new Set(second.map(q => q.id)), new Set(pool.map(q => q.id)))
  assert.equal(JSON.stringify(pool), original)
})

test('Central Kurdish uses local digits and English keeps Latin digits', () => {
  assert.equal(formatNumber(216, 'ku'), '٢١٦')
  assert.equal(formatNumber(216, 'en'), '216')
})

test('shuffling preserves answer identity without mutating the question bank', () => {
  const original = JSON.stringify(questions)
  for (const question of questions) {
    const correct = question.options.find(o => o.id === question.answer)
    const options = shuffle(question.options, () => 0)
    assert.equal(options.find(o => o.id === question.answer), correct)
    assert.equal(new Set(options.map(o => o.id)).size, 4)
    assert.notEqual(options.indexOf(correct), question.options.indexOf(correct))
  }
  assert.equal(JSON.stringify(questions), original)
  assert.deepEqual(shuffle([], () => 0), [])
})

test('interface translations cover the same keys in both languages', () => {
  assert.deepEqual(Object.keys(copy.en).sort(), Object.keys(copy.ku).sort())
  for (const language of ['en', 'ku']) {
    assert.ok(Object.values(copy[language]).every(value => value.trim()))
  }
})
