import {Chip} from "@components/chips/Chip";
import {TbBrandNextjs} from "react-icons/tb";
import {SiExpress, SiTailwindcss, SiMongodb, SiStyledcomponents, SiFramer} from "react-icons/si";
import {BiLogoReact, BiLogoNodejs} from "@node_modules/react-icons/bi";

export const projects =[
    {
        title: "AI Prompts",
        projectThumbnail: "/assets/img/projects/AIPrompts.png",
        projectRepoLink:"https://github.com/Mlika-Gaith/next.js-ai-prompts.git",
        projectLiveDemoLink:"https://next-js-ai-prompts.vercel.app/",
        technologies:['Next.js', 'Express.js', 'Tailwind CSS', 'MongoDB'],
        techChips:[<Chip icon={<TbBrandNextjs size="2.6rem" color="#000000"/>} title="Next.js"/>,
            <Chip icon={<SiExpress size="2.6rem" color="#fff"/>} title="Express.js"/>,
            <Chip icon={<SiTailwindcss size="2.6rem" color="#38BDF8"/>} title="Tailwind CSS"/>,
            <Chip icon={<SiMongodb size="2.2rem" color="#199555"/>}
                  title="MongoDB"/>
        ],
        description:"An intuitive app for creating and sharing AI prompts.",
        modalContent:(
            <>
                <p>An individual project I developed to hone my skills in Next.js.</p>
                <p>The Technology Stack is based on Next.js,
                    connected to an Express.js backend, with data stored in MongoDB.
                </p>
            </>
        ),
        liveDemo:true,
    },
    {
        title: "PolyClubs",
        projectThumbnail: "/assets/img/projects/PolyClubs.png",
        projectRepoLink:"https://github.com/Mlika-Gaith/mern-stack-blog.git",
        projectLiveDemoLink:"",
        technologies:["React.js","Node.js","Express.js","MongoDB"],
        techChips:[<Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                            title="React.js"/>,
            <Chip icon={<SiExpress size="2.6rem" color="#fff"/>} title="Express.js"/>,
            <Chip icon={<BiLogoNodejs size="2.6rem" color="#8BC500"/>} title="Node.js"/>,
            <Chip icon={<SiMongodb size="2.2rem" color="#199555"/>} title="MongoDB"/>],
        description:"A user-friendly app for writing, reading, " +
            "and sharing blog posts, fostering interactive " +
            "engagement through comments and community interaction.",
        modalContent:(
            <>
                <p>My first MERN stack project,
                    designed to validate a web development
                    module as part of my academic coursework.</p>
                <p>The Technology Stack is based on React.js,
                    connected to a Node.js Express.js backend, with data stored in MongoDB.
                </p>
            </>
        ),
        liveDemo:false,
    },
    {
        title: "DigiVault",
        projectThumbnail: "/assets/img/projects/BankingApp.png",
        projectRepoLink:"https://github.com/Mlika-Gaith/react-banking-website.git",
        projectLiveDemoLink:"https://banking-app-react.netlify.app/",
        technologies:['React.js','styled-components'],
        techChips:[<Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                            title="React.js"/>,
            <Chip icon={<SiStyledcomponents size="2.6rem" color="#DA7BB6"/>} title="styled-components"/>,
            ],
        description:"React Template for Online Banking: " +
            "A sleek template crafted with styled-components, " +
            "perfect for a modern online banking application.",
        modalContent:(
            <>
                <p>Side React Project:
                    Designed to enhance my frontend skills through practical application.</p>
                <p>The Technology Stack is based on React.js, and styled-components.</p>
            </>
        ),
        liveDemo:true,
    },
    {
        title: "Portfolio",
        projectThumbnail: "/assets/img/projects/PersonalPortfolio.png",
        projectRepoLink:"https://github.com/Mlika-Gaith/react-portfolio.git",
        projectLiveDemoLink:"https://react-portfolio-ghaith.netlify.app/",
        technologies:['React.js','Framer Motion'],
        techChips:[<Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                            title="React.js"/>,
            <Chip icon={<SiFramer size="2.6rem" color="#fff"/>} title="Framer Motion"/>,
            ],
        description:"Personal Portfolio: " +
            "Crafted using React and Framer Motion " +
            "to incorporate captivating animations and enhance user engagement.",
        modalContent:(
            <>
                <p>Personal Portfolio: A dynamic showcase of skills and projects,
                    complemented by a functional email.js contact form for communication.</p>
                <p>The Technology Stack is based on React.js, Email.js and Framer Motion.</p>
            </>
        ),
        liveDemo:true,
    },
    {
        title: "Energy",
        projectThumbnail: "/assets/img/projects/EnergyApp.png",
        projectRepoLink:"https://github.com/Mlika-Gaith/energy-app.git",
        projectLiveDemoLink:"",
        technologies:['React Native','Express.js', 'Node.js', 'MongoDB'],
        techChips:[<Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                            title="React Native"/>,
            <Chip icon={<SiExpress size="2.6rem" color="#fff"/>} title="Express.js"/>,
            <Chip icon={<BiLogoNodejs size="2.6rem" color="#8BC500"/>} title="Node.js"/>,
            <Chip icon={<SiMongodb size="2.2rem" color="#199555"/>} title="MongoDB"/>
        ],
        description:"A smart mobile app designed for tracking energy consumption" +
            "and estimating costs, providing efficient insights into usage and expenses.",
        modalContent:(
            <>
                <p>This was a two-month summer internship project,
                    offering me the valuable opportunity
                    to learn and utilize React Native for the first time.</p>
                <p>The technology stack incorporates React Native and Express.js,
                    complemented by Google's on-device text detection module,
                    with data storage managed through MongoDB.</p>
            </>
        ),
        liveDemo:false,
    },
]