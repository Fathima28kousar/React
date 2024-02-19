const Cards = ({ item, handleclick, cart }) => {
  const isInCart = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="col-md-3 mb-4">
      <div className="card"  >
        
            <img src={item.image} className="card-img-top" alt={item.title}/>
           
        <div className="card-body" >
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">Price: {item.price}</p>
          <button
            className="btn btn-primary"
            onClick={() => handleclick(item)}
            disabled={isInCart}
          >
            {isInCart ? "In Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
