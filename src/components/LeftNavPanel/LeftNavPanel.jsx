import Logo from "../Logo";
import UserView from "../UserView";
import LeftPanelNav from "../LeftPanelNav";

const LeftNavPanel = ({selectedStatus, setSelectedStatus}) => {
    return ( 
		<div className="left-panel blue-skin">
			<Logo/>
            <UserView/>
            <LeftPanelNav selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />

		</div>
     );
}
 
export default LeftNavPanel;