import {
Card,
Image,
Description,
GradientLine,
TitleCard
} from "./ProjectCard.styles"
import { BtnGradient } from "../../../components/Button/BtnGradient"

type ProjectCardProps = {
image: string
title: string
description: string
link: string
}

export const ProjectCard = ({
image,
title,
description,
link,
}: ProjectCardProps) => {
return (
    <Card>
    <Image src={image} alt={title} />

    <TitleCard>{title}</TitleCard>

    <GradientLine />

    <Description>{description}</Description>

    <BtnGradient
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    >Look it up
    </BtnGradient>
    </Card>
)
}