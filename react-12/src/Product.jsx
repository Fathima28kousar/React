import React ,{Component} from 'react'

class Product extends Component{
    state = {
        name: 'BIODERMA FACEWASH',
        price: 1000,
        image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31rh7TRDJcL._SX300_SY300_QL70_FMwebp_.jpg',
        qty: 1
    }
    incrHandler =() =>{
        this.setState({qty:this.state.qty + 1})
    }
    decrHandler =() =>{
        this.setState({qty:this.state.qty - 1})
    }
    render(){
        return(
        <div className="container mt-5">
                <div className="row">
                    <div className="col-10">
                        <table className='table'>
                            <thead className='bg-dark text-white'>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>QTY</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.name}</td>
                                    <td>{this.state.price}</td>
                                    <td><img src={this.state.image} height={"200px"} alt="" /></td>
                                    <td><i onClick={this.decrHandler}  className='fa fa-minus-circle'></i>{this.state.qty}<i onClick={this.incrHandler} className='fa fa-plus-circle'></i></td>
                                    <td>{this.state.qty * this.state.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
               </div>
        )
    }
}
export default Product