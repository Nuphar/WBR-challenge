import Layout from "./Layout";
import {useSelector} from "react-redux";
import {getLayoutItemsFromCatalogById} from "../store/layoutSlice";

const MiniLayoutWrapper = props => {
    const layoutItems = useSelector(getLayoutItemsFromCatalogById(props.layoutId));

    return (
        <Layout layoutId={props.layoutId} layoutItems={layoutItems} />
    )
}

export default MiniLayoutWrapper;