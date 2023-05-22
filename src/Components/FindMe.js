import React from 'react';
import "../Component_StyleSheet/findme.css";

const FindMe = () => {
    return (
        <div className='findme_container' data-aos="fade-up">
            <h2 className='findme_title'>FIND ME ON</h2>
            <p className='findme_para'>Feel free to <span>connect</span> with me</p>
            <div className='socialmedia'>
                <a className='findme_socialmedia' href="https://github.com/31ChandanTech?tab=repositories"
                    target="_blank"
                    rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    )
}

export default FindMe;