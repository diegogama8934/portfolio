import { ContactForm } from "../atoms";

export function ContactMe() {


  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="flex justify-between items-center">
        <h2 className="lg:text-3xl text-xl text-zinc-700 font-bold">Contáctame 📩</h2>
        <button className="text-blue-900 font-bold lg:text-lg text-sm">Descarga mi CV</button>
      </div>

      <hr />

      <p className="text-zinc-700 lg:text-base text-sm">Si buscas colaborar, deseas desarrollar tu proyecto o te interesó mi perfil, contáctame:</p>

      <ContactForm />

    </div>
  );
}