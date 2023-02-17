import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main-alt.svg'
import Wrapper from '../assets/wrappers/LandingPage'
//import Logo from '../components/Logo' , big list of imports if not using components 
import { Logo } from '../components'
import { Link } from 'react-router-dom'


const Landing = () => {
    return (
        <Wrapper>
            <nav>
                < Logo />
            </nav>
            <div className="container page" >
                {/* info */}
                <div className="info">
                    <h1> Job <span> Tracking </span> App </h1>
                    <p>
                        IPhone butcher raclette, fixie bodega boys slow-carb
                        disrupt direct trade tonx echo park yuccie.
                        Farm-to-table taiyaki heirloom, fit vibecession
                        letterpress iPhone. Big mood pabst shaman chillwave,
                        biodiesel pitchfork 8-bit actually knausgaard
                        master cleanse taxidermy twee shabby chic venmo.
                    </p>
                    <Link to='/register' className='btn btn-hero'> Login/Register </Link>
                </div>
                <img src={main} alt='job hunt' className='img main-alt' />
            </div>
        </Wrapper>
    )
}

export default Landing
