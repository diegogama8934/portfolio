"use client"
import { useState } from "react";

export function Ahorcado({ word }: { word: string }) {

  const [form, setForm] = useState<string[]>(Array.from(word).fill(""));
  const wordToFind: string[] = Array.from(word);

  function handleAttempt({ target }: React.ChangeEvent<HTMLInputElement>) {
    const { value } = target;

    const updatedForm = form.map((char, index) => {
      if (value == wordToFind[index]) return wordToFind[index]
      return char
    });

    setForm(updatedForm);
  }

  return (
    <div className="hidden lg:flex flex-col gap-12">

      <h2 className="text-3xl text-zinc-700 font-bold">Ahorcado</h2>

      <hr />

      <form className="flex gap-4 justify-center bg-gray-500 w-full">
        {
          wordToFind.map((char, index) => (
            <input
              className="bg-zinc-100 p-4 rounded-md w-20 h-20 text-center text-xl"
              key={index}
              id={index.toString()}
              value={form[index]}
              onChange={(e) => handleAttempt(e)}
            />
          ))
        }

      </form>
    </div>
  )
}