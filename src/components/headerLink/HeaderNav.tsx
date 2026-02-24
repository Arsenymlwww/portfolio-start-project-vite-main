import styled from "styled-components";
import { Link } from "react-scroll"; // Импортируем линк

interface HeaderNavProps {
    closeMenu?: () => void; // Опционально, так как на десктопе закрывать нечего
}

export const HeaderNav: React.FC<HeaderNavProps> = ({closeMenu}) => {
    return (
        <StyledLink>
            <ul>
                <li>
                    <Link 
                        to="projects" 
                        smooth={true} 
                        duration={100} 
                        offset={-10} // На сколько px не доезжать
                        spy={true}   // Включает отслеживание активной ссылки
                        activeClass="active" // Класс, который добавится, когда мы в этой секции
                        onClick = {closeMenu}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="technologies" smooth={true}
                        duration={100}
                        offset={5}
                        spy={true}
                        activeClass="active"
                        onClick = {closeMenu}>
                        Technologies
                    </Link>
                </li>
                <li>
                    <Link to="experience"
                        smooth={true}
                        duration={100}
                        offset={1}
                        spy={true}
                        activeClass="active"
                        onClick = {closeMenu}>
                        About me
                    </Link>
                </li>
            </ul>
        </StyledLink>
    );
};

const StyledLink = styled.nav`
    ul {
        display: flex;
        gap: 80px;
        
        /* Стилизуем компонент Link (он рендерится как <a>) */
        a {
            font-weight: 500;
            font-size: 16px;
            display: inline-block;
            cursor: pointer;
            transition: all 0.3s ease; 

            &:hover {
                transform: translateY(-2px); 
                opacity: 0.7;
            }

            /* Стиль для активной ссылки (когда доскроллили до секции) */
            &.active {
                color: #0d47a1; /* Твой акцентный цвет */
                border-bottom: 2px solid #0d47a1;
            }
        }
    }
`;
