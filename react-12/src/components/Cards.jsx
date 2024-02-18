
const Cards = ({item,handleclick}) => {
    const {id,title,price,image} = item
  return (
    
      <div className='col-3'>
            <div className="card" style={{ height: '90%' }}>
                <div className='card-header' style={{ height: '60%',overflow:'hidden' }}>
                    <img src={image} alt='products'  style={{ width: '100%', height: '100%'}} />
                </div>
            <div className="card-body">
                <p className='card-text'>{id}</p>
                <p  className='card-title'>{price}</p>
                <p  className='card-text'>{title}</p>
                <button className="btn btn-success" onClick={() => handleclick(item)}>Add to Cart</button>
            </div>
        </div>
       </div>
     
    
  )
}

export default Cards
