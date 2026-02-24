import iconsSprite from '../../assets/images/icons-sprite.svg'

type IconPropsType = {
    iconId: string
    width?:string
    height?:string
    viewBox?:string
}

export const Icon = (props: IconPropsType) => { 
    return (
        <svg 
            // Если размеры переданы — ставим их, если нет — пусть берет из CSS
            width={props.width} 
            height={props.height} 
            viewBox={props.viewBox || "0 0 50 50"} 
            fill="none" 
            xmlns="http://www.w3.org"
        >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    )
}
