import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import slide1 from '../../support/images/landingpage/debby-hudson-1289302-unsplash.jpg'
import slide2 from '../../support/images/landingpage/slide-2.jpg'
import slide3 from '../../support/images/landingpage/rawpixel-1366164-unsplash.jpg'


class MyCarousel extends React.Component{
        render(){
        return (
            <div style={{marginTop:"-50px"}}>
                <Slider autoplay={1000}>
                    
                    <div style={{ background: `url('${slide1}') no-repeat center`, height:"512px" }}>
                        <div style={{textAlign:'left', paddingLeft:'100px'}}>
                            <h1 style={{fontSize:'62px', paddingTop:'140px'}}>Looking for art supplies?</h1>
                            
                            {/* <button>{item.button}</button> */}
                        </div>
		            </div>
                    <div style={{ background: `url('${slide2}') no-repeat center`, height:"512px" }}>
                        <div style={{textAlign:'left', paddingLeft:'100px'}}>
                        <p style={{fontSize:'62px', paddingTop:'100px', color:'black', fontWeight:800}}>The best art supplies <br></br> are available here</p>
                            {/* <p>Semuanya</p> */}
                            {/* <button>{item.button}</button> */}
                        </div>
		            </div>
                    <div style={{ background: `url('${slide3}') no-repeat center`, height:"512px" }}>
                        <div style={{textAlign:'right', paddingRight:'100px'}} >
                        <p style={{fontSize:'62px', paddingTop:'70px', color:"#1E1E1E", fontWeight:800}}>We provide you <br></br> with a bunch <br></br> of art supplies!
                        </p>
                        {/* <p style={{fontSize:'23px'}}>Such as painting brush, brush pen, watercolor, drawing pen, and many more!</p> */}
                            {/* <p>Semuanya</p> */}
                            {/* <button>{item.button}</button> */}
                        </div>
		            </div>

                    </Slider>
            </div>
        )
    }
}

export default MyCarousel