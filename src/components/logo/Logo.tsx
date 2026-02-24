import styled from "styled-components"
import { Icon } from "../icon/Icon"
import { animateScroll as scroll } from "react-scroll"

export const Logo = () => {
    return (
        
            <LogoLink onClick={()=> {scroll.scrollToTop()}}>
                <Icon iconId={'CvLogo'}/>
            </LogoLink>
        
    )
}

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;

    svg{
        max-width: 185px;
        height: 50px;
    }
`