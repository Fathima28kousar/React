import {list} from '../data'
import Cards from './Cards'
const Amazon = ({handleclick}) => {
    return(
        <div className='container mt-5' >
             <div className='row'>
            {
                list.map((item) => (
                    <Cards key={item.id} item={item} handleclick={handleclick}/>
                ))
            }
        </div>
        </div>
    )
}
export default Amazon