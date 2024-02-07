
const Home = (props) => {
  console.log('home',props)
  return (
    <div>
        <div className='add-to-cart'>
            <img src='data:image/jpeg;base64,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' alt='cart'/>
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
            <button
            onClick={() =>
              props.addToCartHandler({price:100,name:'iphone'})}
            >Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
