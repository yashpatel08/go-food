import React from 'react'
import dish from '../images/dish.jpg'
import lemon from '../images/lemon.jpg'
import vegetable from '../images/vegetable.jpg'
import arrow from '../images/arrow.png'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-content">
                <div className="left">
                    <div className="left-content">

                        <p className='discount'>Discount up to 20%</p>
                        <div className='flex-row'>

                        <p className='big-txt'>Buy Fresh And Orgainc Grocery Food</p><img src={lemon} alt=""  className='lemon-img'/><img className='arrow-img' src={arrow} alt="!" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid cumque eos!</p>
                        <div className="sub-left">

                            <div className="left1">

                                <button className='shop-btn'>SHOP NOW   <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                            <div className="left2">
                                <div>
                                    <span>35k+</span>
                                    <p>Users</p>
                                </div>
                                <div>
                                    <span>18k+</span>
                                    <p>Products</p>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="right-content">
                        <div className="sub-right">

                        <img src={dish} alt="!" className='dish-img' />
                        <p className='subright-desc'>Delivered Right to Your Doorstep. </p>
                        </div>
                    </div>
                    <img src={vegetable} alt="" className='vegetable-img' />
                </div>
            </div>
        </div>
    )
}

export default Home