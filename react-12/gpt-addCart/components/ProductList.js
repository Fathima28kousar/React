import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductList = ({ products, addToCart }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };


  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// mapStateToProps remains the same
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addToCart })(ProductList);
