import React from 'react';

const Infobar = () => {
    return (
        <div className="container-fluid align-items-center text-center justify-content-center p-4 infoBarContainer tema light">
            <div className="row justify-content-md-center p-4">
                <div className="col-sm">
                    <h2>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-calendar-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        </svg>
                    </h2>
                    <h3>Agenda una fecha con nosotros</h3>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Aliquam repellat cumque consequatur libero delectus voluptatibus 
                        adipisci reprehenderit aspernatur cum odit?
                    </p>
                </div>
                <div className="col-sm">
                    <h2><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-emoji-laughing" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5z"/>
                        <path d="M7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                    </h2>
                    <h3>Visibilidad para tu evento </h3>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Aliquam repellat cumque consequatur libero delectus voluptatibus 
                        adipisci reprehenderit aspernatur cum odit?
                    </p>
                </div>
                <div className="col-sm">
                    <h2><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-camera2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5C7.343 5 5 6.343 5 8a4 4 0 0 1 4-4v1z"/>
                        <path fill-rule="evenodd" d="M14.333 3h-2.015A5.97 5.97 0 0 0 9 2a5.972 5.972 0 0 0-3.318 1H1.667C.747 3 0 3.746 0 4.667v6.666C0 12.253.746 13 1.667 13h4.015c.95.632 2.091 1 3.318 1a5.973 5.973 0 0 0 3.318-1h2.015c.92 0 1.667-.746 1.667-1.667V4.667C16 3.747 15.254 3 14.333 3zM1.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM9 13A5 5 0 1 0 9 3a5 5 0 0 0 0 10z"/>
                        <path d="M2 3a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1z"/>
                        </svg>
                    </h2>
                    <h3>Captura los mejores momentos</h3>
                    <p className="text-left">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Aliquam repellat cumque consequatur libero delectus voluptatibus 
                        adipisci reprehenderit aspernatur cum odit?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Infobar;