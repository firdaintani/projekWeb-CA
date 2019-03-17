import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {urlApi} from '../support/urlApi'

class ProductAll extends React.Component{
    state = {listProduct : []}

    componentDidMount(){
        this.getDataProduct()
    }
    getDataProduct = () => {
        axios.get(urlApi + '/products')
        .then((res) => this.setState({listProduct : res.data}))
        .catch((err) => console.log(err))
    }
    renderProdukJsx = () => {
        var jsx = this.state.listProduct.map((val) => {
            return (
                <div className="card col-md-3 mr-5 mt-3" style={{width: '18rem'}}>
                    <Link to={'/product-detail/' + val.id}><img title={val.name} className="card-img-top gambar-produk" src={val.img} alt="Card" /></Link>
                    
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
                    <Link to={'/product-detail/' + val.id}><input type='button' className='d-block btn btn-primary' value='Add To Cart' /></Link>
                    </div>
                </div>
            )
        })

        return jsx
    }
    render (){
        return(
            <div style={{marginTop:'70px'}}>
                <h1>ALL PRODUCTS</h1>
                <div className='row justify-content-center'>
                    {this.renderProdukJsx()}
                </div>
            </div>
        )
    }
}
export default ProductAll