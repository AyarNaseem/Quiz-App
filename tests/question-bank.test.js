import test from 'node:test'
import assert from 'node:assert/strict'
import { questions, categories, shuffle } from '../src/data/questions.js'
import { copy } from '../src/data/translations.js'

test('every question has complete bilingual content and one unambiguous answer', () => {
  assert.ok(questions.length >= 100)
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

test('every category and difficulty supports at least a five-question quiz', () => {
  for (const category of categories) {
    for (const level of ['easy', 'medium', 'hard']) {
      const pool = questions.filter(q => q.category === category.id && q.level === level)
      assert.ok(pool.length >= 5, category.id + ' / ' + level)
      const quiz = shuffle(pool).slice(0, 5)
      assert.equal(new Set(quiz.map(q => q.id)).size, 5)
    }
  }
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
