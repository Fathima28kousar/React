import {useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {selectedProduct,removeSelectedProduct} from '../redux/actions/productActions'

const ProductDetail = () =>{
    const product = useSelector((state) => state.product)
    const {productId} = useParams();
    const dispatch = useDispatch()
    console.log(product)

    const fetchProductDetail = async() => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err)
        })
        dispatch(selectedProduct(response.data))
    }
    useEffect(() => {
        if(productId && productId !== "") 
        fetchProductDetail();
          return () => {
            dispatch(removeSelectedProduct())
          }


    }, [productId,dispatch])
    return (
        <div className="container mt-5">
          {Object.keys(product).length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div className="row">
              <div className="col-md-4">
                <img className="img-fluid" src={product.image} alt={product.title} />
              </div>
              <div className="col-md-8">
                <h1>{product.title}</h1>
                <h2>
                  <span className="badge bg-teal">${product.price}</span>
                </h2>
                <h3 className="bg-brown text-white p-2">{product.category}</h3>
                <p>{product.description}</p>
                <button className="btn btn-primary">
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      );
      
}
export default ProductDetail