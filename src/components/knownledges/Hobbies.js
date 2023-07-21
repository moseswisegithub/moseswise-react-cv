import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêt</h3>
            <ul>
                <li>
                    <i className="fas fa-running"></i> 
                    <span> Course à pied </span>
                </li>
                <li>
                    <i className="fab fa-bitcoin"></i> 
                    <span> Crypto-monnaie </span>
                </li>
                <li>
                    <i className="fas fa-seedling"></i> 
                    <span> Permaculture</span>
                </li>
                <li>
                    <i className="fas fa-rocket"></i> 
                    <span> Espace </span>
                </li>
                <li>
                    <i className="fas fa-hiking"></i> 
                    <span> Randonnées </span>
                </li>
                
            </ul>
           
        </div>
    );
};

export default Hobbies;