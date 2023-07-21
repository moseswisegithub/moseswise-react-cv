import React from 'react';
import Navigation from './../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <div className="contactContent">
                <div className="header"> 
                </div>
                <div className="contactBox">
                    <h1> Contactez-moi</h1>
                    <ul>
                        <li> 
                            <i className="fas fa-map-marker-alt"></i>
                            <span> Côte d'Ivoire</span>
                        </li>
                        <li> 
                            <i className="fas fa-mobile-marker-alt"></i>
                            <CopyToClipboard text="+225 0556117423">
                                <span className="clickInput" onClick={()=>{
                                    alert("Télephone copié !");
                                }}>
                                +225 0556117423
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li> 
                            <i className="far fa-enveloppe"></i>
                            <CopyToClipboard text="moseswise96658434@gmail.com">
                                <span className="clickInput" onClick={()=>{
                                    alert("Email copié !");
                                }}>
                                moseswise96658434@gmail.com
                                </span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"> 
                            <h4> Linkedin</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"> 
                            <h4> Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"> 
                            <h4> Twitter</h4>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="http://www.google.com" target="_blank" rel="noopener noreferrer"> 
                            <h4> CodePen</h4>
                            <i className="fab fa-codepen"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;