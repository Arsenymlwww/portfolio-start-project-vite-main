import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const Logo = () => {
    return (
        /* Добавляем href="/", чтобы ссылка была валидной, 
           но отменяем переход через preventDefault, так как используем scroll */
        <LogoLink href="/" aria-label="Go to top" onClick={(e) => {
            e.preventDefault(); 
            scroll.scrollToTop();
        }}>
            <Icon iconId="CvLogo" width="185" height="48" viewBox="0 0 185 48" />
        </LogoLink>
    );
};

const LogoLink = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
`;
