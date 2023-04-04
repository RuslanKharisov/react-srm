import { useState } from "react";
import {statusList} from '../constants';


const TopStatusBar = ({selectedStatus, setSelectedStatus}) => {
        const statusFilter = (e) => {
            setSelectedStatus(e.dataset.value);
            e.className="btn btn-dark"
            return (
                console.log(e.dataset.value)
            )
        };
    
    
    return ( 
        <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
            {
                statusList.map((status)=> {
                    return (
                        <a 
                        key={status.value} 
                        onClick={(e) => {statusFilter(e.target)}}
                        className={status.value == selectedStatus ? "btn btn-dark" : "btn btn-light" } 
                        data-value={status.value}
                        >{status.title}
                        </a>
                    );
                })
            }
        </div>
     );
};
//  "btn btn-light"
export default TopStatusBar;