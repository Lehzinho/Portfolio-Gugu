"use client"
import { styled } from 'styled-components'

export const Container = styled.section`
    grid-area: main;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    padding: 0 27px;

    &::before,
    &::after{
        content: '';
        position: absolute;
        width: 255px;
        aspect-ratio: 1;
        opacity: 0.4;
        filter: blur(87px);

    }

    &::after{
        left: 120px;
        bottom: 100px;
        background-color: #4D5BCE;
        
    }
    
    &::before{
        right: 120px;
        top: 100px;
        transform: rotatey(180deg);
        background-color: #43D9AD;


    }
`

export const Info = styled.div`
display: flex;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
z-index: 1;

h2{
    color: #43D9AD;
}
p{
    margin-bottom: 16px;
}
.find{
    color: #607B96;
    margin-top: 150px;
}

span{
    color: #E99287;
    &:first-child{
        color:#4D5BCE;
    }
    &:nth-child(2){
        color:#43D9AD;
    }
    &:nth-child(3){
        text-decoration: underline;
    }
}
`