import { useSelector } from "react-redux"

const ProductComponent =() => {
    const products = useSelector((state) => state);
    const {id,title} = product
    return(
        <div>
            
        </div>
    )
}
export default ProductComponent