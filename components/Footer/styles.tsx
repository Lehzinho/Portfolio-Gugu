"use client"
import {styled} from 'styled-components'

export const Container = styled.footer`
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #2b4057;
    padding-left: 18px;
    p{
        color: #607B96;
    }
    .separator{
        width: 1px;
        background-color:#2b4057;
        height: 100%;
        &:nth-child(2){
            margin-left: auto;
        }
    }
   `