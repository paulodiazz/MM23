import React, {useState} from 'react';
import '../assets/styles/mainContent.css'
import '../assets/styles/main.css'
import MuyLogo from '../assets/images/moymulogo.svg';
import Button from './Button'
import WhiteListForm from './WhiteListForm'

// const form_link = "https://docs.google.com/forms/d/e/1FAIpQLSeXVSfbl1fGEHphip8KsJHiGLLKxXJG1Nw7EIn2zgidVslm2w/viewform?usp=sf_link";
// const open_form = async() => {window.open(form_link, '_blank')};

const MainContent = () => {
    const [whitelistState, changeWhitelist] = useState(false);
    
    return (
        <div className='main-content'>
            {/* Logo de Muy Mu 23 */}
            <div className='row bg-noise'>
                <img src={MuyLogo} alt="Logo Muy Muñoz 23" id='muyLogo' className='mx-auto'/>
            </div>

            {/* Carrusel de imagenes por un gif */}
            <div className='row bg-noise'>
                <img src={require('../assets/images/change5.gif')} alt="Carrusel NFT" className='mx-auto carrusel'/>
            </div>
            {/* Botones MINT NFT y Whitelist */}
            <div className='row bg-noise pb-3'>
                <div className='col-6'>
                        <Button text="Mint nft"/>
                </div>
                <div className='col-6'>
                    <Button text="Whitelist" onClick={() => changeWhitelist(!whitelistState)}/>
                    <WhiteListForm state={whitelistState} changeWhitelist={changeWhitelist} />
                </div>
            </div>
            {/* Coming Soon */}
            <div className='row bg-noise'>
                    <img src={require('../assets/images/comingsoon.gif')} alt="Carrusel NFT" className='gif'/>
            </div>
            {/* Welcome to the metaverse */}
            <div className='row'>
                <div className='relative'>
                    <img src={require('../assets/images/welcometoverse.gif')} alt="Welcome to the metaverse" className='metaverse' />
                    <img src={require('../assets/images/flymanMetaverse.png')} alt="Welcome to the metaverse" className='on-top' />
                </div>
            </div>
            {/* Fechas */}
            <div className='row border-between less-margin'>
                <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                    <div className='container font-weight-bold left' id='info'>
                        <h2 className='font-weight-bold'>21-22 DESARROLLO</h2>
                        <p>El inicio de una familia apasionada de los deportes alrededor del mundo</p>
                        <h2 className='font-weight-bold'>22 MINT</h2>
                        <p>JULIO 2022. (Más información en nuestro discord)</p>
                    </div>
                </div>
                <div className='col-sm-6 p-0'>
                        <img className='nft right' src={require('../assets/images/flyman1.jpg')} alt="Flyman" />
                </div>
            </div>
            <hr/>
            {/* Eventos */}
            <div className='row border-between pb-3'>
                <div className='col-sm-6 p-0'>
                        <img className='nft left' src={require('../assets/images/flyman1.jpg')} alt="Flyman" />
                </div>
                <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                    <div className='container font-weight-bold right' id='info'>
                        <h2 className='text-uppercase font-weight-bold'>2022 Inicio de la experiencia</h2>
                        <p>Para los holders, entradas a partidos, Meet&greet Moises Muñoz, Eventos y conciertos Pepsi center, Experiencias únicas con la Fórmula 1 y la NFL.</p>
                        <h2 className='text-uppercase font-weight-bold'>2022 Reunión</h2>
                        <p>Primera reunión de holders. Artista invitado sorpresa.</p>
                    </div>
                </div>
            </div>
            {/* Team */}
            <div className='row bg-noise'>
                <div className='col text-center py-4'>
                    <button className='team'>Meet the team</button>
                    <div className='container'>
                        <h1 className='my-4 text-light bg-dark'>Imagenes del equipo</h1>
                    </div>
                </div>
            </div>
            {/* FAQS */}
            <div className='row border-between pt-3'>
                <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                    <div className='container font-weight-bold left' id='info'>
                        <h2 className='text-uppercase'>Conoce la colección</h2>
                        <p>Una colección de NFTs inspirada en uno de los momentos más icónicos de la historia del Futbol Mexicano. El gol sobre la hora de Moises Muñoz que marcó su carrera y a todos los aficionados, ahora es inmortalizado en piezas de arte digital que puedes tener.</p>
                    </div>
                </div>
                <div className='col-sm-6 d-flex align-items-center justify-content-center'>
                    <div className='container font-weight-bold right' id='info'>
                        <h2 className='text-uppercase pb-4'>FAQs y Comunidad</h2>
                        <p>Para saber todo acerca de la colección, las categorías y rarezas de las piezas síguenos en todas nuestras redes sociales, únete a nuestro servidor de DISCORD. Ahí resolveremos todas tus dudas y encontrarás el apartado de FAQs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MainContent;

//'../assets/images/comingsoon.gif'