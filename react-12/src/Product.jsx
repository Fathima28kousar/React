import React from 'react'
import Axios from 'axios'

class Product extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state = {
            product:{}
        }
    }
    getProductHandler = () =>{
        console.log('123')
        // Axios.get().then().catch()
        Axios.get('https://dummyjson.com/products')
            .then((response) => {
                console.log(response.data)
                this.setState({
                    product:response.data
                })
            }).catch((err)=>{})
    }
    render(){
        return(
            <div>
                <h1>Product Component!</h1>
                <pre>{JSON.stringify(this.state)}</pre>
                <button onClick={this.getProductHandler}>Get Products</button>
            </div>
        )
    }
}
export default Product