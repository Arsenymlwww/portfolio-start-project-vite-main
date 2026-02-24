import {
Item,
GradientLine,
Year,
Description,
ContentWrapper, // Враппер для текста
} from "./ExperienceItem.styles"

type ExperienceItemProps = {
year: string
text: string
}

export const ExperienceItem = ({ year, text }: ExperienceItemProps) => {
return (
    <Item>
    <GradientLine />
    <ContentWrapper>
        <Year>{year}</Year>
        <Description>{text}</Description>
    </ContentWrapper>
    </Item>
)
}
