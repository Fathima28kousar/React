import {list}from '../data'
import Cards from './Cards'

const Amazon = ({handleClick,cart}) => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        {list.map((item) => 
            <Cards key={item.id} item={item} handleClick={handleClick} cart={cart} />
        )}
      </div>
    </div>
  )
}

export default Amazon
