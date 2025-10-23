const logotext = "GbaneAbou";
const meta = {
    title: "Gbane Abou",
    description: "I’m Gbane Abou _ Full stack devloper,currently working in Abidjan",
};

const introdata = {
    title: "Je me nome GBANE ABOU",
    animated: {
        first: "J'aime Coder",
        second: "Je suis développeur Fullstack",
        third: " et mobile aussi",
    },
    description: "Etudiant fraichement diplômer d'un BTS en informatique développeur d'application, ravi d'être a votre service",
    your_img_url: process.env.PUBLIC_URL + "/images/nouveaufondecran.jpg",
};

const dataabout = {
    title: "un peu sur moi",
    aboutme: "Développeur Fullstack à la recherche d'opportunité pour appliquer mes connaissances et gagner en compétences",
};
const worktimeline = [{
        jobtitle: "Développeur Fullstack en chef chez AFRICK CONTRACTOR",
        where: "rivera bonoumin",
        date: "Fevrier 2024",
    },
    {
        jobtitle: "Freelance developpeur",
        where: "Koumassi sopim",
        date: "2024-maintenant",
    },
    {
        jobtitle: "Développeur - Infographe",
        where: "Koumassi Saint-Etienne",
        date: "Mai-Septembre",
    },
];

const skills = [
    {
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 90,
    },
    {
        name: "JAVASCRIPT",
        value: 70,
    },
    {
        name: "JAVA UX/UI",
        value: 50,
    },
    {
        name: "LARAVEL",
        value: 70,
    },
    {
        name: "REACT",
        value: 80,
    },
    {
        name: "PHP",
        value: 60,
    },
    {
        name: "SQL",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Le UI Design séduit l’œil, le UX Design simplifie la vie,Les deux sont complémentaires et essentiels pour créer des applications réussies.",

    },
    {
        title: "Mobile Apps",
        description: "",
    },
    {
        title: "Web sites et Apps",
        description: "",
    },
];

const dataportfolio = [{
        img: process.env.PUBLIC_URL + "/images/page jbc.png",
        description: "SITE WEB DE JEUNESSE BASKET CLUB",
        link: "#",
    },
    {
        img: process.env.PUBLIC_URL + "/images/img app.png",
        description: "APP MOBILE POUR EQUIPE DE BASKET-BALL",
        link: "#",
    },
    {
        img: process.env.PUBLIC_URL + "/images/img pro.png",
        description: "ALTERNATIVE WHATAPP",
        link: "#",
    },
    {
        img: process.env.PUBLIC_URL + "/images/Capture d’écran 2024-08-01 140957.png",
        description: "APP WEB DE GESTION IMMOBILIERE",
        link: "#",
    },
    {
        img: process.env.PUBLIC_URL + "/images/muscu app.PNG",
        description: "APP DE SUIVI SPORTIF PERSONNEL",
        link: "#",
    },
    {
        img: process.env.PUBLIC_URL + "/images/ecommerce.png",
        description: "UX/UI DE APP E-COMMERCE",
        link: "#",
    },

    {
        img: process.env.PUBLIC_URL + "/images/instaabou.PNG",
        description: "RESEAUX SOCIAL INSTAABOU",
        link: "#",
    },
    {
        img: process.env.PUBLIC_URL + "/images/capture.PNG",
        description: "SITE WEB DE VENTE DE CACAO",
        link: "https://www.mokuku-international.com/index.html",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "abcdefg12345abou@gmail.com",
    YOUR_FONE: "0151360596 - 0544879036",
    description: "Contactez moi pour tout projet personnel ou entreprise",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
     
};

const socialprofils = {
    github: "https://github.com/Bebeadft",
    facebook: "https://www.facebook.com/profile.php?id=100092390359478",
    linkedin: "https://https://www.linkedin.com/in/abou-gbane-94361a28b/",
    
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};