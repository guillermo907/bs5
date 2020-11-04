import React from 'react';
import styled from 'styled-components';


const DropDownContent = styled.ul`
    display: none;
    list-style-type: none;
    position: absolute;
    background-color: aqua;
    z-index: 1;
`;

const Button = styled.button`
    background-color: #008CBA; 
    color: white;
    border:  2px solid #4CAF50;
    opacity: 50%;
    transition: 0.5s all ease-out;
    &:hover {
        opacity: 100%;
        background-color: #4a956ae8;
        color: white;
    }
    &:hover ${DropDownContent} {
        display: block !important;  
    }
`;
const Div = styled.div`
    min-height: 100vh;
    background: linear-gradient(180deg, #0d6dfdca, #4a956ae8, #0d6efd);
    color: white !important;
    background-size: 120% 120%;
    animation: gradient 10s ease infinite;
`;
const Dropdown = styled.div`
    display: inline-block;
`;


const About = () => {

    return (
        <Div className="container-fluid text-white p-2 align-items-center text-center justify-content-center">
            <h1>
                <svg width="15em" height="15em" viewBox="0 0 16 16" className="bi bi-book-half p-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 2.687v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                </svg>
            </h1>
            <h1>Estudia </h1>
            <p>lorem19  </p>
            <Dropdown>
                <Button className="btn dropBtn" onMouseEnter={e => document.getElementById("contenidoDrop").style.display = "block" } onMouseLeave={e => document.getElementById("contenidoDrop").style.display = "none" } > Pueba </Button>
                <DropDownContent id="contenidoDrop" onMouseEnter={e => document.getElementById("contenidoDrop").style.display = "block" } onMouseLeave={e => document.getElementById("contenidoDrop").style.display = "none" }>
                    <li>opcion1</li>
                    <li>opcion2</li>
                    <li>opcion2</li>
                </DropDownContent>
            </Dropdown>
        </Div>
    );
}

export default About;

