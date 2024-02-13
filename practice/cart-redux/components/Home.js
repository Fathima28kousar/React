
const Home = (props) => {
  console.log('home',props)
  
  return (
    <div>
        <div className='add-to-cart'>
          <span>{props.cardData.length}</span>
            <img src='data:image/png;base64,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' alt='cart'/>
        </div>
      <h1>Home component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRtYOtUHMWwZjFlcq5DAyRbVPxzkny9ky38vyhnC9_j56a9WRuKDhzycrHo69W9ES4mh_FP4OD873d1ew4x-XIfKaYrU2TRAt9A5-T0tLPZx8wvGO9io3DD69fYcece7FWwmH9xwz43&usqp=CAc' alt=''/>
        </div>
        <div className='text-wrapper item'>
            <span>
                I-phone
            </span>
            <span>
                Price: $1000.0
            </span>
        </div>
        <div className='btn-wrapper item'>
        <button className='add-button' onClick={() =>props.addToCartHandler({price:100,name:'iphone'})}>Add to cart</button>
        <button className='remove-button' onClick={() =>props.removeCartHandler()}>Remove</button>
        </div>
      </div>
    </div>
  )
}

export default Home