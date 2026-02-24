import styled from "styled-components"
import { Menu } from "../../components/menu/Menu"
import { CallMe, ContactInfo, ContactLink, ContactsWrapper, EmailText, FooterContainer } from "./Footer.styled"

export const Footer: React.FC = () => {
    return (
        <StyledFooter>
            <FooterContainer>
                <ContactsWrapper>
                    <ContactInfo>
                        <CallMe>Call me:</CallMe>
                        <ContactLink href="tel:+375(33)3883365">+375(33)3883365</ContactLink>
                    </ContactInfo>
                    <ContactInfo>
                        <EmailText>Gmail:</EmailText>
                        <ContactLink href="mailto:sentyaabrr@gmail.com">sentyaabrr@gmail.com</ContactLink>
                    </ContactInfo>
                </ContactsWrapper>
                <Menu/>
            </FooterContainer>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    background-color: #0F1624;
    padding: 42px 0;
    position: relative;

`



