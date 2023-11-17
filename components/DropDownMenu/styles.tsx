'use client'
import {styled} from 'styled-components'

export const Container = styled.nav`
    .firstMenu{
        padding:0 25px;
        background-color: #1E2D3D;
        img{
            transform: rotate(-90deg);
            &.active{
                transform: rotate(0deg);
            }
        }

    }
    p{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    `

export const DropDownMenuContent = styled.ul`
    display: none;
    flex-direction: column;
    &.active{
        display: flex;
    }
    padding:0 25px;
    margin-top: 5px;
    p{
        display: flex;
        align-items: center;
        gap: 5px;
        padding-left: 10px ;
    }
    li{
        margin-top: 5px;
        color: #607B96;
        list-style: disc;
        margin-left: 60px;
    }


`