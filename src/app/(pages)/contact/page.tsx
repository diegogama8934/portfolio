import { ContactForm } from "@/components/atoms";


export default function ContactPage() {


  return (
    <div className="flex flex-col gap-12 items-center">
      <h1 className="text-4xl font-bold text-zinc-800">Colaboremos juntos 🤝🏽</h1>

      <div className="flex gap-8">
        <ContactForm />
      </div>
    </div>
  );
}