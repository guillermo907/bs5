import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const onClickTheme = (e) =>{
        alert("clicked");
    }

    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient">
                <div className="container-fluid text-white">
                    <a className="navbar-brand" href="#"> Navbar </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="container">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/"> Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about"> About </Link>
                                </li>             
                            </ul> 
                        </div>
                        <div className="container d-flex justify-content-end">
                            <div className="dropleft">  
                                {/* <button className="btn btn-outline-light" id ="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">Theme</button> */}
                                <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-brightness-high-fill" id ="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
                                <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                </svg>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a href="" className="dropdown-item" 
                                        onClick = {(e) => {
                                            e.preventDefault();
                                            const divs = document.getElementsByClassName("container-fluid");
                                            for (let el of divs){
                                                el.classList.toggle("color");
                                            }
                                        }}>Color</a></li>
                                    <li>
                                        <a href="" className="dropdown-item" 
                                        onClick = { (e) => {
                                            e.preventDefault();
                                            document.body.classList.remove("dark");
                                            document.body.classList.toggle("light");
                                        } }>Light</a>
                                    </li>
                                    <li>
                                        <a href="" className="dropdown-item" 
                                        onClick = {(e) => {
                                        e.preventDefault();
                                        document.body.classList.remove("light");
                                        document.body.classList.toggle("dark");
                                        }}> Dark</a>
                                    </li>
                                </ul>
                            </div>      
                        </div>                                              
                    </div>     
                </div>
                
            </nav>    
    );
}

export default Navbar;