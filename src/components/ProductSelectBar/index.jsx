import {productList} from '../constants';

const ProductSelectBar = ({selectedProduct, setSelectedProduct}) => {


    const productSelected = (e) => {
        console.log(e)
        setSelectedProduct(e)
    }

    return (
        <select onChange={(e)=>{productSelected(e.target.value)}}  className="custom-select" id="productSelect" defaultValue={"all"}>
            {
                productList.map((product) => {
                    return <option value={product.value} key={product.id} >{product.title}</option>
                })
            }
        </select>
     );
}
 
export default ProductSelectBar;


