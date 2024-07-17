"use client";
import { FormEvent, useEffect, useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleInputChange({ target }: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const { value, id } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form className="lg:w-[420px] flex flex-col gap-4" onSubmit={(e) => handleFormSubmit(e)}>

      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-zinc-700 lg:text-base text-sm">Nombre</label>
        <input
          type="text"
          id="name"
          className="p-4 bg-zinc-100 rounded lg:text-base text-sm"
          placeholder="Tu nombre"
          value={form.name}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-zinc-700 lg:text-base text-sm">Correo</label>
        <input
          type="email"
          id="email"
          className="p-4 bg-zinc-100 rounded lg:text-base text-sm"
          placeholder="Escribe tu correo"
          value={form.email}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-zinc-700 lg:text-base text-sm">Mensaje</label>
        <textarea
          id="message"
          className="p-4 bg-zinc-100 rounded lg:text-base text-sm"
          placeholder="Deja tu mensaje"
          value={form.message}
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <button className="bg-blue-900 text-white p-4 rounded font-bold">Enviar</button>

    </form>
  );
}