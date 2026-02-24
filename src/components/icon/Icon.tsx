import iconsSprite from '../../assets/images/icons-sprite.svg'


type IconPropsType = {
    iconId: string
    width?:string
    height?:string
    viewBox?:string
}

// export const Icon = (props:IconPropsType) => {
//     return (
//         <svg  fill="none" xmlns="http://www.w3.org/2000/svg">
//             <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
//         </svg>
//     )
// };

// export const Icon = ({ iconId }: IconPropsType) => {

export const Icon = (props:IconPropsType) => { 
    return (
        <svg>
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    )
}


// {props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 185 48"}
