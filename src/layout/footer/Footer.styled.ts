import styled from "styled-components"

export const FooterContainer = styled.div`
    max-width: 1172px;
    margin: 0 auto;
    padding: 26px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 32px;
    }
`

export const ContactsWrapper = styled.div`
display: flex;
gap: 160px;
font-weight: 600;
font-size: 22px;

@media (max-width:768px ){
    width: 100%;
    justify-content: space-between;
    gap: 0;
}
`

export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
`

export const CallMe = styled.span`
    
    opacity: 0.7;
    margin-bottom: 4px;
`
export const EmailText = styled.span`
    
    opacity: 0.7;
    margin-bottom: 4px;
`

export const ContactLink = styled.a`
    font-size: 16px;
    color: #fff;
    text-decoration: none;

    @media (max-width:768px ){
        font-size: 14px;
}
`

