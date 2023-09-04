import { styled } from "styled-components";
import {mobile} from '../../responsive';

export const AnnouncementSection = styled.section`
    height: 60px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;

    ${mobile({
        height: '50px',
        fontSize: '12px'
    })}
`