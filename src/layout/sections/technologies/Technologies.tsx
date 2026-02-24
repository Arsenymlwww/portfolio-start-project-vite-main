import { TitleSection } from "../../../components/TitleSection/TitleSection";
import { AddTechBlock } from "./AddTech";
import { TechnologyBar } from "./TechnologiesBar";
import {
    TechnologiesSection,
    TechnologiesContainer,
    BarsWrapper,
} from "./Technologies.styles";
import { Slide } from "react-awesome-reveal";

const TECH_DATA = [
    { title: "HTML", level: 97, duration: 6, gradient: "linear-gradient(270deg, #2d4bf7, #30d9ff, #ff7675)", },
    { title: "CSS", level: 94, duration: 6.1, gradient: "linear-gradient(270deg, #3451f4, #00cefc, #ff7675)" },
    { title: "Styled Components", level: 94, duration: 6.3, gradient: "linear-gradient(270deg,#425ae7, #17b1d3,  #ff7675)" },
    { title: "React", level: 93, duration: 6.2, gradient: "linear-gradient(270deg, #3955ef, #1d9dba, #ff7675)" },
    { title: "Vue", level: 89, duration: 6.6, gradient: "linear-gradient(270deg, #3d56e6, #39b4d0, #ff7675)" },
    { title: "JS", level: 92, duration: 6.4, gradient: "linear-gradient(270deg, #3650e1, #05b1d7, #ff7675)" },
    { title: "TypeScript", level: 90, duration: 6.5, gradient: "linear-gradient(270deg, #3d56e6, #39b4d0, #ff7675)" },
    
];

export const Technologies: React.FC = () => {
    return (
        <TechnologiesSection id="technologies">
            <TechnologiesContainer>
                <TitleSection>Technologies</TitleSection>
                <BarsWrapper>
                    <Slide cascade damping={0.1} triggerOnce direction="left" fraction={0.3}>
                    {TECH_DATA.map((tech) => (
                        <TechnologyBar key={tech.title} {...tech} />
                    ))}
                    </Slide>
                </BarsWrapper>
                <AddTechBlock />
            </TechnologiesContainer>
        </TechnologiesSection>
    );
};