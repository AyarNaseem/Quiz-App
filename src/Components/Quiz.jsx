/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useRef, useState, useEffect } from 'react'
// import './Quiz.css'
// import { data } from '../data/data.js'
// // react icons
// // import {Sun, Moon} from 'fa-react-icons'


// const Quiz = ({ darkMode, kurdishMode }) => {
//   const [randomQuestions, setRandomQuestions] = useState([])
//   const [index, setIndex] = useState(0)
//   const [question, setQuestion] = useState(null)
//   const [lock, setLock] = useState(false)
//   const [score, setScore] = useState(0)
//   const [result, setResult] = useState(false)

//   const opt1 = useRef(null)
//   const opt2 = useRef(null)
//   const opt3 = useRef(null)
//   const opt4 = useRef(null)

//   const opt_array = [opt1, opt2, opt3, opt4]

//   // Reset quiz when language changes
//   useEffect(() => {
//     const shuffled = [...data].sort(() => 0.5 - Math.random())
//     setRandomQuestions(shuffled.slice(0, 10))
//     setIndex(0)
//     setScore(0)
//     setResult(false)
//     setLock(false)
//   }, [kurdishMode])

//   // Set current question when index or questions change
//   useEffect(() => {
//     if (randomQuestions.length > 0) {
//       setQuestion(randomQuestions[index])
//       // Reset option styles when question changes
//       opt_array.forEach((o) => {
//         if (o.current) {
//           o.current.classList.remove('wrong')
//           o.current.classList.remove('correct')
//         }
//       })
//     }
//   }, [index, randomQuestions])



  
//   const next = () => {
//     if (lock === true) {
//       if (index === randomQuestions.length - 1) {
//         setResult(true)
//         return
//       }
//       setIndex(prevIndex => prevIndex + 1)
//       setLock(false)
//     }
//   }

//   const reset = () => {
//     const shuffled = [...data].sort(() => 0.5 - Math.random())
//     setRandomQuestions(shuffled.slice(0, 10))
//     setIndex(0)
//     setScore(0)
//     setLock(false)
//     setResult(false)
//   }

//   const checkAns = (e, ans) => {
//     if (lock === false) {
//       if (question.ans === ans) {
//         e.target.classList.add('correct')
//         setLock(true)
//         setScore((prev) => prev + 1)
//       } else {
//         e.target.classList.add('wrong')
//         setLock(true)
//         opt_array[question.ans - 1].current.classList.add('correct')
//       }
//     }
//   }

//   if (!question) return <div className="container">Loading...</div>

//   return (
//     <div className="container">
//       {result ? (
//         <>
//           <h2>
//             {kurdishMode
//               ? `تۆ ${score} پرسیارت ڕاست بوو لە کۆی ${randomQuestions.length} پرسیار `
//               : `You scored ${score} out of ${randomQuestions.length}`}
//           </h2>
//           <button onClick={reset}>
//             {kurdishMode ? 'دووبارەکردنەوە' : 'Try Again'}
//           </button>
//         </>
//       ) : (
//         <>
//           <h2>
//             {index + 1}. {kurdishMode ? question.qKu : question.q}
//           </h2>
//           <ul>
//             <li
//               ref={opt1}
//               onClick={(e) => checkAns(e, 1)}
//             >
//               {kurdishMode ? question.opt1Ku : question.opt1}
//             </li>
//             <li
//               ref={opt2}
//               onClick={(e) => checkAns(e, 2)}
//             >
//               {kurdishMode ? question.opt2Ku : question.opt2}
//             </li>
//             <li
//               ref={opt3}
//               onClick={(e) => checkAns(e, 3)}
//             >
//               {kurdishMode ? question.opt3Ku : question.opt3}
//             </li>
//             <li
//               ref={opt4}
//               onClick={(e) => checkAns(e, 4)}
//             >
//               {kurdishMode ? question.opt4Ku : question.opt4}
//             </li>
//           </ul>
//           <button onClick={next} disabled={!lock}>
//             {kurdishMode ? 'دواتر' : 'Next'}
//           </button>
//           <div className="index">
//             {index + 1} {kurdishMode ? '/' : '/'} {randomQuestions.length}{' '}
//             {kurdishMode ? 'پرسیار' : 'questions'}
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// export default Quiz

import React, { useRef, useState, useEffect } from 'react'
import './Quiz.css'
import { data } from '../data/data.js'

const Quiz = ({ darkMode, kurdishMode, onGameStart }) => {
  const [randomQuestions, setRandomQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [question, setQuestion] = useState(null)
  const [lock, setLock] = useState(false)
  const [score, setScore] = useState(0)
  const [result, setResult] = useState(false)

  const opt1 = useRef(null)
  const opt2 = useRef(null)
  const opt3 = useRef(null)
  const opt4 = useRef(null)

  const opt_array = [opt1, opt2, opt3, opt4]

  // Reset quiz when language changes
  useEffect(() => {
    const shuffled = [...data].sort(() => 0.5 - Math.random())
    setRandomQuestions(shuffled.slice(0, 10))
    setIndex(0)
    setScore(0)
    setResult(false)
    setLock(false)
  }, [kurdishMode])

  // Set current question when index or questions change
  useEffect(() => {
    if (randomQuestions.length > 0) {
      setQuestion(randomQuestions[index])
      // Reset option styles when question changes
      opt_array.forEach((o) => {
        if (o.current) {
          o.current.classList.remove('wrong')
          o.current.classList.remove('correct')
        }
      })
      
      // Notify parent when game starts (first question loads)
      if (index === 0) {
        onGameStart()
      }
    }
  }, [index, randomQuestions])

  const next = () => {
    if (lock === true) {
      if (index === randomQuestions.length - 1) {
        setResult(true)
        return
      }
      setIndex(prevIndex => prevIndex + 1)
      setLock(false)
    }
  }

  const reset = () => {
    const shuffled = [...data].sort(() => 0.5 - Math.random())
    setRandomQuestions(shuffled.slice(0, 10))
    setIndex(0)
    setScore(0)
    setLock(false)
    setResult(false)
  }

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add('correct')
        setLock(true)
        setScore((prev) => prev + 1)
      } else {
        e.target.classList.add('wrong')
        setLock(true)
        opt_array[question.ans - 1].current.classList.add('correct')
      }
    }
  }

  if (!question) return <div className="container">Loading...</div>

  return (
    <div className="container">
      {result ? (
        <>
          <h2>
            {kurdishMode
              ? `تۆ ${score} پرسیارت ڕاست بوو لە کۆی ${randomQuestions.length} پرسیار`
              : `You scored ${score} out of ${randomQuestions.length}`}
          </h2>
          <button onClick={reset}>
            {kurdishMode ? 'دووبارەکردنەوە' : 'Try Again'}
          </button>
        </>
      ) : (
        <>
          <h2>
            {index + 1}. {kurdishMode ? question.qKu : question.q}
          </h2>
          <ul>
            <li
              ref={opt1}
              onClick={(e) => checkAns(e, 1)}
            >
              {kurdishMode ? question.opt1Ku : question.opt1}
            </li>
            <li
              ref={opt2}
              onClick={(e) => checkAns(e, 2)}
            >
              {kurdishMode ? question.opt2Ku : question.opt2}
            </li>
            <li
              ref={opt3}
              onClick={(e) => checkAns(e, 3)}
            >
              {kurdishMode ? question.opt3Ku : question.opt3}
            </li>
            <li
              ref={opt4}
              onClick={(e) => checkAns(e, 4)}
            >
              {kurdishMode ? question.opt4Ku : question.opt4}
            </li>
          </ul>
          <button onClick={next} disabled={!lock}>
            {kurdishMode ? 'دواتر' : 'Next'}
          </button>
          <div className="index">
            {index + 1} {kurdishMode ? '/' : '/'} {randomQuestions.length}{' '}
            {kurdishMode ? 'پرسیار' : 'questions'}
          </div>
        </>
      )}
    </div>
  )
}

export default Quiz