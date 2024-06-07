import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [bool, setBool] = useState(false);
    const display = () => {

        setBool(!bool);
    }
    return (
        <div className='nav-container'>
            <div className="navbar">
                <div className='toogle-div' >

                    <h2>GO <span>FOOD</span></h2>


                    <button className='toogle' onClick={display}><i class="fa-solid fa-bars"></i></button>
                </div>
                <div className="nav-items">

                    <h2>GO <span>FOOD</span></h2>
                    <Link to='/home' className='nav-link black'>Home</Link>
                    <Link to='/area' className='nav-link black'>Country wise Meal</Link>
                    <Link to='/about' className='nav-link black'>About us</Link>
                </div>
                <Link to='/connect' className='nav-link white'>Connect with us <i class="fa-solid fa-arrow-right"></i></Link>

                <div className="nav-icons">

                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                    <p><i class="fa-regular fa-user"></i></p>
                    <p><i class="fa-regular fa-heart"></i></p>
                    <p><i class="fa-solid fa-bag-shopping"></i></p>
                </div>

                {bool &&
                    <div className='nav-items2'>
                        <Link to='/home' className='nav-link black'>Home</Link>
                        <Link to='/area' className='nav-link black'>Country wise Meal</Link>
                        <Link to='/about' className='nav-link black'>About us</Link>
                        <Link to='/connect' className='nav-link white'>Connect with us <i class="fa-solid fa-arrow-right"></i></Link>
                        <div className="navv-icons">

                            <p><i class="fa-solid fa-magnifying-glass"></i></p>
                            <p><i class="fa-regular fa-user"></i></p>
                            <p><i class="fa-regular fa-heart"></i></p>
                            <p><i class="fa-solid fa-bag-shopping"></i></p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar