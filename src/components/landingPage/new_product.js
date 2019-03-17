import React from 'react'
import '../../support/css/newProduct.css'
//  from 'semantic-ui-react'
import axios from 'axios'
import { urlApi } from '../../support/urlApi';
import Slider from "react-slick";
// import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom'

class NewProduct extends React.Component{
    state={listNewProduct:[]}

    componentDidMount=()=>{
        this.getDataNewProduct()
    }
    getDataNewProduct=()=>{
        axios.get(urlApi+'/new-product')
        .then((res)=>{
            this.setState({listNewProduct:res.data}
            )
     
        }
       
        )
        .catch((err)=>console.log(err))
        
    }

    renderDataNewProduct=()=>{
        var newProduct = this.state.listNewProduct.map((val)=>{
            return (
                <div className='card card-deck'>
                         <Link to={'/product-detail/' + val.id}><img className="card-img-top gambar-produk" src={val.img} alt="Card" /></Link>
                    
                    {/* { Pake if ternary (karena melakukan pengkondisian di dalam return)} */}


                    {   
                        val.discount > 0 ?
                        <div className='discount'>{val.discount}%</div>
                        : null
                    }
                    <div className="card-body">
                    <h4 className="card-text" style={{height:'30px'}}>{val.name}</h4>

                    {
                        val.discount > 0 ?
                        <p className="card-text" style={{textDecoration:'line-through',color:'red',display:'inline'}}>Rp. {val.price}</p>
                        : null
                    }

                    <p style={{display:'inline' , marginLeft:'10px',fontWeight:'500'}}>Rp. {val.price - (val.price*(val.discount/100))}</p>
                    <input type='button' className='d-block btn btn-primary' value='Add To Cart' />
                    </div>

                    </div>
                    // <div className='item'>val.name</div>
            )
        }
        
        )
        // alert(typeof(newProduct))
        return newProduct
    }



    render(){
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
        return(
            <div className='container' style={{marginTop:'60px'}}>
               
                    {/* <Paper> */}
                    <h2 style={{textAlign:"left"}}> NEW PRODUCTS </h2>
                        <Slider {...settings}>
                            {this.renderDataNewProduct()}
                        </Slider>
                    {/* </Paper> */}
               
            </div>
        )
    }
}

export default NewProduct