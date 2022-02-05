import { Responsive, WidthProvider } from "react-grid-layout";
import {useDispatch, useSelector} from "react-redux";
import {addChildToLayout, getLayoutById} from '../store/layoutSlice';
import {Card} from "@mui/material";
import ChildComponent from "./ChildComponent";
import './Layout.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

const Layout = props => {
    const dispatch = useDispatch();
    const {layout, breakpoints, cols, rowHeight} = useSelector(getLayoutById(props.layoutId));

    const dragOverHandler = e => {
        e.preventDefault();
    }

    const dropHandler = item => e => {
        const compId = e.dataTransfer.getData("component");

        dispatch(addChildToLayout({id:item, component:compId}));

    }

    return (
        <ResponsiveGridLayout
            className='layout'
            layouts={layout}
            breakpoints={breakpoints}
            cols={cols}
            rowHeight={rowHeight}
            isDraggable={false}
            isResizable={false}
        >
            {
                props.layoutItems.map(item => {
                    return (
                        <Card className='layout-card' variant="outlined" key={item.id} id={item.id} onDragOver={dragOverHandler} onDrop={dropHandler(item.id)} >
                            {item.children.map((child, index) => {
                                return <ChildComponent key={index} compId={child}/>
                            })}
                        </Card>
                    );
                })
            }
        </ResponsiveGridLayout>
    );
}

export default Layout;