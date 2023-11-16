"use client"
import {styled} from 'styled-components'

export const Container = styled.nav`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    border-bottom: 1px solid #2b4057;
    color: #607B96;
    position: relative;
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        &.hamburguer{
            width: 18px;
            height: 2px;
            background-color: #607B96;
            box-shadow: 0 6px #607B96, 0 -6px #607B96;
        }
    }



`
export const NavLinks = styled.nav`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 0px;
    overflow: hidden;
    left: 0;
    top: calc(100% + 1px);
    border-bottom: 1px solid #2b4057;
    background-color: #011627;
    border-radius: 0 0 8px 8px ;
    z-index: 2;
    transition: all 22s ease;
    
    a {
        padding: 18px;
        &:visited {
            color: white;
        }
    }

    .separator {
        width: 100%;
        height: 1px;
        background-color: #2b4057;
    }

    &.active {
        height: 230px;
    }
`;
