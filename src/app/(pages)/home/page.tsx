import {
  Ahorcado,
  ContactMe,
  Hero,
  ProjectsResume,
  Technologies,
} from "@/components/sections"

async function getRandomWord() {

}

export default async function HomePage() {


  return (
    <>
      <Hero />

      <ProjectsResume />

      <Technologies />

      <ContactMe />

      <Ahorcado word={"Elefante"} />
    </>
  )
}