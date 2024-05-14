'use client'

import { Flashcard } from './flashcards/flashcard';
import FlashcardForm from './flashcards/flashcard_form';
import React from 'react';

const { useState, useEffect, useRef } = React;

export default function Home() {

  let ref = useRef<Flashcard[] | null>([])

  const [currentFlashCard, setFlashCard] = useState(new Flashcard)
  const [guess, setGuess] = useState("");

  const pickNewCard = () => {
    console.log(ref);
    if (ref.current === null || ref.current.length === 0) {
        setFlashCard(new Flashcard);
    } else {
        var index = Math.floor(Math.random() * ref.current.length);
        setFlashCard(ref.current[index]);
    }
  }

  useEffect(() => {
    var list = [
        new Flashcard({"text":"あ", "answer": "a"}),
        new Flashcard({"text":"い", "answer": "i"}),
        new Flashcard({"text":"う", "answer": "u"}),
        new Flashcard({"text":"え", "answer": "e"}),
    ];

    ref.current = list;
    pickNewCard()
  }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <FlashcardForm flashcard={currentFlashCard} setFlashCard={setFlashCard} changeGuessHandler={setGuess} guess={guess} nextCardHandler={pickNewCard}  />
    </main>
  );
}
