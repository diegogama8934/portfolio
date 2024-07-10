import type { ActiveLink, ProjectResume } from "./Interfaces";


export const porfolioSections: ActiveLink[] = [
    {
        href: "/home",
        pageName: "Home"
    },
    {
        href: "/aboutMe",
        pageName: "About Me"
    },
    {
        href: "/projects",
        pageName: "Projects"
    },
    {
        href: "/contact",
        pageName: "Contact"
    },
    {
        href: "/testimonials",
        pageName: "Testimonials"
    }
];

export const projectsResume: ProjectResume[] = [
    {
        name: "Teach",
        objective: "Educación en remoto",
        description: "Imparte, cursa y administra materiales escolares.",
        link: "https://teach-opal.vercel.app/home/subjects"
    },
    {
        name: "Bolsa de trabajo UAQ",
        objective: "Fuente de trabajo",
        description: "Un buen lugar para encontrar trabajo o colaboradores",
        link: ""
    },
    {
        name: "Tech Nova",
        objective: "Administración de proyectos",
        description: "Integrantes, tareas, fechas, problemas... gestiónalo todo.",
        link: "https://tech-nova-five.vercel.app/dashboard/home"
    }
]