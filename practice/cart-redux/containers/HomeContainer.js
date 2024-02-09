import Home from '../components/Home'
import {connect} from 'react-redux'
import { addToCart,removeCart } from '../service/actions/Actions'

const mapStateToProps = state => ({
    cardData: state.cardItems.cardData
});

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeCartHandler: data => dispatch(removeCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)



// export default Home
// HomeContainer.js





