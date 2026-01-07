'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export default function TypewriterText({ words, className = '' }: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setCurrentText(words[0]);
      return;
    }

    const word = words[currentWordIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setCurrentText(word.substring(0, currentText.length + 1));

          if (currentText === word) {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          setCurrentText(word.substring(0, currentText.length - 1));

          if (currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((currentWordIndex + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
