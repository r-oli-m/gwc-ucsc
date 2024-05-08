import React from 'react';
import { FaDiscord, FaInstagram, FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import '../styles/Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-links'>
                <a href="https://discord.gg/t8c3kQ4b" target="_blank" rel="noreferrer">
                    <FaDiscord size={30} />
                </a>
                <a href="https://www.instagram.com/gwcucsc/" target="_blank" rel="noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a href="https://www.linkedin.com/in/ucsc-gwc-32558728b/" target="_blank" rel="noreferrer">
                    <FaLinkedin size={30} />
                </a>
                <a href="mailto:ucscgwc@gmail.com" target="_blank" rel="noreferrer">
                    <IoMail size={30} />
                </a>
                <a href="https://github.com/MadelineMiller/ucsc-gwc-webapp" target="_blank" rel="noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://open.spotify.com/playlist/1o7SF5Lc85F6QZ9jBkcGaK?si=9e869860a0fc4d98" target="_blank" rel="noreferrer">
                    <FaSpotify size={30} />
                </a>


            </div>
            {/* You can add additional content or links here */}
        </div>
    );
};

export default Footer;
