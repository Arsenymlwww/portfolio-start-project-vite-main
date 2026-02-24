import { ProjectCard } from "./ProjectCard"
import mockPhoto from "../../../assets/images/mockPhoto.jpg";
import ASKPhoto from "../../../assets/images/Ask.fm_Logo.png";
import SpacePhoto from "../../../assets/images/from-the-spacex.webp";
import {
ProjectsSection,
ProjectsContainer,
ProjectsGrid
} from "./Projects.styles"
import { TitleSection } from "../../../components/TitleSection/TitleSection";
import { Fade } from "react-awesome-reveal";


const ProjectCardData = [
    {
        image: mockPhoto,
        title: "Notes dev",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "https://arsenymlwww.github.io/project.Notes/",
    },
    {
        image: mockPhoto,
        title: "Notes dev",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        link: "https://arsenymlwww.github.io/project.Notes/",
    },    
    {
            image: SpacePhoto,
            title:"SpaceX",
            description:"SpaceX designs, manufactures and launches advanced rockets and spacecraft.",
            link:"https://www.spacex.com/",
    },    
    {
            image:ASKPhoto,
            title:"ASK.FM",
            description:"«Самые важные вопросы ты должен задать себе сам». — Урсула Ле Гуин",
            link: "https://arsenymlwww.github.io/project.Notes/",
    }
]

export const Projects: React.FC = () => {
    return (
    <ProjectsSection id="projects">
    <ProjectsContainer>
        <TitleSection>Projects</TitleSection>
        <ProjectsGrid>
            <Fade cascade damping={0.2} triggerOnce={true}  direction="up" fraction={0.3}>
            {ProjectCardData.map((p, index)=> {
                return <ProjectCard 
                image = {p.image} key = {index}
                title = {p.title}
                description = {p.description}
                link = {p.link}/>
            })}
            </Fade>
        </ProjectsGrid>
    </ProjectsContainer>
    </ProjectsSection>
)
}