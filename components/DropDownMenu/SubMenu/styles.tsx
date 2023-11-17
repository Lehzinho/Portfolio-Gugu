'use client'
import styled from "styled-components"

export const Container = styled.div`
    margin-top: 5px;
    p{
        padding-left: 30px;
    }
    ul{
        display: none;
        flex-direction: column;
        &.active{
            display: flex;
        }
        li:first-child{
            margin-top: 10px;
        }
    }
`