import {useState} from 'react'
const Product = () => {
    let [product,setProduct] = useState({
        product_Name : 'Apple IPhone 14',
        price : 57999,
        image: 'https://rukminim2.flixcart.com/image/224/224/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=90',
        qty: 1
    })

    let incrHandler = () =>{
        setProduct({...product, qty:product.qty +1} )
    }

    return(
        <div className='container'>
            <pre>{JSON.stringify(product)}</pre>
            <div className='row'>
                <div className="col-8">
                    <table className="table">
                        <thead className="bg-warning text-white">
                            <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{product.product_Name}</td>
                                <td><img src={product.image} width='50px' alt=''/></td>
                                <td>{product.price}</td>
                                <td><i className='fa fa-minus-circle' onClick={()=>{
                                    setProduct({...product,qty:product.qty - 1})}}></i>
                                    {product.qty}
                                    <i className='fa fa-plus-circle' onClick={incrHandler}></i></td>
                                <td>{product.qty * product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}
export default Product