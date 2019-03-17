import React from 'react';

import '../../support/css/landingPage.css'
import NewProduct from './new_product'
import ProductAll from '../productAll'
import MyCarousel from './carousel'

class LandingPage extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center",marginTop:'50px'}}>
                {/* <div className='container'> */}
                    {/* <img src={gambar_awal} className='imageDepan'></img>
                    
                </div>
                <div className='slogan'>
                        <h3 className='slogan-text'>BE BRAVE WITH YOUR STYLE</h3> */}
                    {/* <div className="jumbotron jumbotron-fluid" id="jumbo_tron">
                        <div className="container">
                            <h1 className="display-4">LOREM IPSUM </h1>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet elit in sem lobortis ullamcorper. Quisque pharetra, purus ac.</p>
                        </div>
                    </div> */}

                {/* </div> */}
                <MyCarousel/>
                <div className='container'>
                    <NewProduct/>
                    <ProductAll/>
                </div>
            </div>
          
        )
    }
}

export default LandingPage