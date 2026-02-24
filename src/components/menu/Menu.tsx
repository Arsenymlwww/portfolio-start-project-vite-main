import styled from "styled-components"
import { Icon } from "../icon/Icon"

export const Menu : React.FC = () => {
    return (
        <StyledMenu>
            <List>
                <li><a href="https://t.me/arseny_mlwww"><Icon iconId={'TG'} /></a></li>
                <li><a href="https://ru.linkedin.com/"><Icon iconId={'Linkedin'}/></a></li>
                <li><a href="https://github.com/Arsenymlwww"><Icon iconId={'Github'} /></a></li>
            </List>
        </StyledMenu>
    )
}


const StyledMenu = styled.nav`

`

const List = styled.ul`
        display: flex;
        gap: 25px;

        svg{
            width: 36px;
            height: 34px;
            fill: white;
        }

        a:hover svg {
        transform: translateY(-3px); 
    }
`
