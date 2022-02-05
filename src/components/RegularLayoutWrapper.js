import Layout from "./Layout";
import {useSelector} from "react-redux";
import {getLayoutItemsById} from "../store/layoutSlice";

const RegularLayoutWrapper = props => {
    const layoutItems = useSelector(getLayoutItemsById(props.layoutId));

    return (
        <Layout layoutId={props.layoutId} layoutItems={layoutItems} />
    )
}

export default RegularLayoutWrapper;