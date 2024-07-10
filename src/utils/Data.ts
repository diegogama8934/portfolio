import type { ActiveLink, ProjectResume, TechnologyItem } from "./Interfaces";


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
        description: "Un buen lugar para encontrar trabajo o colaboradores.",
        link: ""
    },
    {
        name: "Tech Nova",
        objective: "Administración de proyectos",
        description: "Integrantes, tareas, fechas, problemas... gestiónalo todo.",
        link: "https://tech-nova-five.vercel.app/dashboard/home"
    }
]

export const technologiesPool: TechnologyItem[] = [
    {
        name: "React",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        level: 6,
        knowledge: [
            "React router",
            "Redux",
            "Zustand"
        ]
    },
    {
        name: "Next",
        image: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
        level: 5,
        knowledge: [
            "Next UI",
            "Server actions",
            "Manejar caché"
        ]
    },
    {
        name: "Figma",
        image: "https://forosdeia.com/directorio-ia/figma.843/cover-image",
        level: 9,
        knowledge: [
            "Buenas prácticas para el desarrollo",
            "Variantes",
            "Componentes"
        ]
    }
]