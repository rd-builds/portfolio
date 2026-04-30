import { useEffect, useState } from 'react'

export default function useTypingText(words, typeSpeed = 95, pause = 1450) {
  const [wordIndex, setWordIndex] = useState(0)
  const [letterIndex, setLetterIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const isComplete = letterIndex === current.length
    const isEmpty = letterIndex === 0
    const delay = deleting ? typeSpeed / 1.8 : isComplete ? pause : typeSpeed

    const timeout = window.setTimeout(() => {
      if (!deleting && isComplete) {
        setDeleting(true)
        return
      }

      if (deleting && isEmpty) {
        setDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
        return
      }

      setLetterIndex((index) => index + (deleting ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [deleting, letterIndex, pause, typeSpeed, wordIndex, words])

  return words[wordIndex].slice(0, letterIndex)
}
