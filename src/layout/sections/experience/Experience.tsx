import { TitleSection } from "../../../components/TitleSection/TitleSection"
import {
  ExperienceSection,
  ExperienceContainer,
  ItemsWrapper,
} from "./Experience.styles"
import { ExperienceItem } from "./ExperienceItem"

const ExperienceData = [
  {
      year:"2020",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
    {
      year:"2021",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
    {
      year:"2023",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
    {
      year:"2025",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
    {
      year:"2026",
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },

]
export const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <TitleSection>Experience</TitleSection>
        <ItemsWrapper>
          {ExperienceData.map((y, index)=>{
            return <ExperienceItem
            year={y.year} key = {index}
            text={y.text}
          />
          })}
        </ItemsWrapper>

      </ExperienceContainer>
    </ExperienceSection>
  )
}
