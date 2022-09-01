import React from 'react'
import '../assets/styles/footer.css'
import '../assets/styles/main.css'

const Footer = () => {
    return(
        <div className='container-fluid'>
            <div className='row border-between pt-4'>
                <div className='col-md-4'>
                    <h5 className='text-uppercase'> Términos y condiciones</h5>
                </div>
                <div className='col-md-4'>
                    <a href="https://discord.com" className="social-media" id="discord-black"> </a>
                    <a href="https://discord.com" className="social-media" id="twitter-black"> </a>
                    <a href="https://discord.com" className="social-media" id="instagram-black"> </a>
                    <a href="https://discord.com" className="social-media" id="youtube-black"> </a>
                </div>
                <div className='col-md-4'>
                    <h5 className='text-uppercase'>Política de privacidad</h5>
                </div>
            </div>
        </div>
    );
}
export default Footer;