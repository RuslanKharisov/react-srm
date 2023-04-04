import {statusList} from '../constants';

const LeftPanelNav = ({selectedStatus, setSelectedStatus}) => {

    const statusFilter = (e) => {
        setSelectedStatus(e.dataset.value);
        e.className="btn btn-dark"
        return (
            console.log(e.dataset.value)
        )
    };

    

    return ( 
        <div className="left-panel__navigation">
            <div className="left-panel__navigation-title">Заявки</div>
            <ul>
                {statusList.map((status) => {
                    return (
                    <li key={status.id}>
                        <a
                            onClick={(e) => {statusFilter(e.target)}}
                            data-value={status.value} 
                            data-role="left-status" 
                            className={status.value == selectedStatus ? "active" : ""}
                        >
                            {status.title}
                        </a>
                    </li>)
                })}
            </ul>
        </div>
     );
}
 
export default LeftPanelNav;

{/* <li><a data-value="all" data-role="left-status" href="#" className="active">Все вместе</a></li>
<li><a data-value="new" data-role="left-status" href="#" >Новые<div className="badge" id="badge-new">12</div></a></li>
<li><a data-value="inwork" data-role="left-status" href="#">В работе</a></li>
<li><a data-value="complete" data-role="left-status" href="#">Завершенные</a></li> */}