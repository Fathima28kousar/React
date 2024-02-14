import { useSelector } from "react-redux"
import {Link} from 'react-router-dom'

const ProductComponent =() => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => 
        (
            <div className='col-md-3' key={product.id}>
                <Link to={`/product/${product.id}`} className='link-style'>
                <div className='card' style={{ height: '90%' }}>
                    <div className='card-header' style={{ height: '60%', overflow: 'hidden' }}>
                    <img
                        src={product.image}
                        alt='product'
                        style={{ width: '100%', height: '100%'}}
                        />
                    </div>
                    <div className='card-body'>
                        <h6 className='card-title'>{product.title}</h6>
                        <h6 className='card-title'>${product.price}</h6>
                        <p className='card-text'>{product.category}</p>
                    </div>
                </div>
                </Link>
            </div>
        )
    )
    
    return (<div className='container mt-5'>
        <div className='row' style={{ height: '300px' }}> 
        {renderList}
        </div>
        </div> 
         )
}
export default ProductComponent