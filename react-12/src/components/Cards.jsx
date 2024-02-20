
const Cards = ({item,handleClick,cart}) => {
  const isInCart = cart && cart.find((cartItem) => cartItem.id === item.id);
  return (
    <div className='col-md-3'>
      <div className='card'>
        <img src={item.image} alt={item.title}  />

        <div className='card-body'>
            <h5 className='card-title'>{item.title}</h5>
            <p className='card-text'>{item.price}</p>
            <button className='btn btn-success' onClick={() => handleClick(item)} disabled={isInCart}>
                {isInCart ? 'Is in Cart' : 'Add to Cart'}
            </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
