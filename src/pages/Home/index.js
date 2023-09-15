import React from 'react'
import './styles.css'
import logo from "../../images/OAU-Logo-PNG 1.png"
import frame from "../../images/Frame 5.png"
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            {/*Navbar*/}
            <div className='hn-contain'>
                <div className='h-nav'>
                    <div className='h-logo'>
                        <img src={logo} alt='logo' className='hlogo' />
                        <p className='h-nav-p'>Obafemi Awolowo University<br />
                            Admission portal
                        </p>
                    </div>
                    <Link className='h-link' to='/login'>
                        <div className='h-nav-left'>
                            <p className='h-n-p'>Admin log In</p>
                        </div>
                    </Link>
                </div>
            </div>
            {/*main*/}
            <div className="h-main">
                <div className='hm-content'>
                    <div className='hm-contain'>
                        <p className='hm-p'>OAU Admisssion 2023/2024</p>
                        <h2 className='hm-h2'>
                            OAU Post-utme/DE <br />
                            Screening Form For <br />
                            2023/2024 Academic Session <br />
                        </h2>
                        <button className='hm-but'>View Details</button> 
                        <img className="hm-img" src={frame} alt='frames' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home