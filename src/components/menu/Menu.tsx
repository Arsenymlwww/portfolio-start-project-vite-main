import styled from "styled-components"
import { Icon } from "../icon/Icon"

export const Menu : React.FC = () => {
    return (
        <StyledMenu>
            <List>
                <li><a href="https://t.me/arseny_mlwww" aria-label="telegram link"><Icon iconId={'TG'} width = "36" height="30" viewBox="0 0 32 32" /></a></li>
                <li><a href="https://ru.linkedin.com/" aria-label="linkedin link"><Icon iconId={'Linkedin'} width = "32" height="32" viewBox="0 0 32 32" /></a></li>
                <li><a href="https://github.com/Arsenymlwww" aria-label="Github link"><Icon iconId={'Github'} width = "32" height="32" viewBox="0 0 32 32"  /></a></li>
            </List>
        </StyledMenu>
    )
}

const StyledMenu = styled.nav`

`
const List = styled.ul`
        display: flex;
        gap: 25px;
        a:hover svg {
        transform: translateY(-3px); 
    }
`
