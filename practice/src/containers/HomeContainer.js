import Home from '../components/Home'
import {connect} from 'react-redux'
import { addToCart } from '../service/actions/Actions'

const mapStateToProps = state => ({
    cardData: state
})

const mapDispatchToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)



// export default Home