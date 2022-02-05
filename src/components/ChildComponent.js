import {useSelector} from "react-redux";
import {getComponentById} from "../store/componentsSlice";

const ChildComponent = props => {
    const componentToDisplay = useSelector(getComponentById(props.compId));

    return (
        <div>
            {componentToDisplay.component}
        </div>
    );
}

export default ChildComponent;