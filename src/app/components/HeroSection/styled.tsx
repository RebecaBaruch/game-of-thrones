import { HeroSectionProps } from '@/interfaces/props';
import styled from 'styled-components';

export const Main = styled.main<HeroSectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 95vh;
  background: url(${props => props.imgUrl.src}) center no-repeat;
  background-size: cover;
`;

export const MainContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 33px;
    color: white;
`