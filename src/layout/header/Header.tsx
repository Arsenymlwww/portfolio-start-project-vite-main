// import styled from "styled-components";
import {useState} from "react";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import {HeaderNav } from "../../components/headerLink/HeaderNav";
import { BurgerButton, DesktopMenu, DesktopNav, HeaderContainer, MobileMenu, MobileNav, StyledHeader } from "./Header.styles";
import React from "react";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 900;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleWindowResize);
        
        // Важно: убираем обработчик при размонтировании компонента
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyledHeader>
            <HeaderContainer>
                <Logo />

                {width < breakpoint ? (
                    // Мобильная версия: только кнопка бургера
                    <BurgerButton isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)}>
                        <span />
                        <span />
                        <span />
                    </BurgerButton>
                ) : (
                    // Десктопная версия: навигация и меню сразу
                    <>
                        <DesktopNav>
                            <HeaderNav />
                        </DesktopNav>
                        <DesktopMenu>
                            <Menu />
                        </DesktopMenu>
                    </>
                )}
            </HeaderContainer>

            {/* Мобильное меню (выпадающее) */}
            {width < breakpoint && isOpen && (
                <MobileMenu  >
                    <MobileNav>
                        <HeaderNav closeMenu={() => setIsOpen(false)}/>
                    </MobileNav>
                    <Menu />
                </MobileMenu>
            )}
        </StyledHeader>
    );
};

