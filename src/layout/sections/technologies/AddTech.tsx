// import styled from "styled-components"
import { AddTech, AddTechLogoWrapper, AddTitle } from "./AddTech.styles"
import GitLogo from "../../../assets/images/RedSkill.svg";
import GitHubLogo from "../../../assets/images/GhSkill.svg";
import Figma from "../../../assets/images/WhiteSkill.svg";


export const AddTechBlock = () => {
    return(
        <AddTech>
            <AddTitle>Additional technologies and skills</AddTitle>
            <AddTechLogoWrapper>
                <img src={GitLogo} alt="GIT" />
                <img src={GitHubLogo} alt="GitHub" />
                <img src={Figma} alt="figma" />
            </AddTechLogoWrapper>
        </AddTech>
    )
}