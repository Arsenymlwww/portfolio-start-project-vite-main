import { BarWrapper, Label, Track, Progress } from "./TechnologiesBar.styles";

type TechnologyBarProps = {
title: string;
level: number; // 0–100
duration?: number;
gradient?: string;
};



export const TechnologyBar = ({ title, level, duration, gradient}:TechnologyBarProps) => {
return (
    <BarWrapper>
    <Label>{title}</Label>
    <Track>
    <Progress level={level} duration={duration} gradient = {gradient}/>
    </Track>
    </BarWrapper>
);
};





































// export const TechnologyBar: FC<TechnologyBarProps> = ({ title, level }) => {
// return (
//     <BarWrapper>
//     <Label>{title}</Label>
//     <Track>
//     <Progress level={level} />
//     </Track>
//     </BarWrapper>
// );
// };