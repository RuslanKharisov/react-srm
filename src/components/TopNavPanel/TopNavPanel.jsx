import TopStatusBar from "../TopStatusBar"
import ProductSelectBar from "../ProductSelectBar"

const TopNavPanel = ({selectedStatus, setSelectedStatus, selectedProduct, setSelectedProduct}) => {




    return ( 
        <form action="">
            <div className="form-row">
                <div className="row mb-3 justify-content-start">
                    <div className="col">
                       <TopStatusBar 
                       selectedStatus={selectedStatus} 
                       setSelectedStatus={setSelectedStatus} 
                       />
                    </div>

                    <div className="col">
                        <ProductSelectBar 
                        selectedProduct={selectedProduct} 
                        setSelectedProduct={setSelectedProduct} 
                        />
                    </div>
                </div>
            </div>
        </form>
     );
}
 
export default TopNavPanel;