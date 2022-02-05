import { useSelector, useDispatch } from 'react-redux';
import {selectLayout} from "../store/layoutSlice";
import { Responsive, WidthProvider } from "react-grid-layout";
import {Card} from "@mui/material";
import {getLayoutsIds} from "../store/layoutSlice";
import MiniLayoutWrapper from "../components/MiniLayoutWrapper";
import './LayoutPage.css';
import {useNavigate} from "react-router-dom";

const ResponsiveGridLayout = WidthProvider(Responsive);

const LayoutPage = () => {
    const layoutsIds = useSelector(state =>getLayoutsIds(state));
    const {layout, breakpoints, cols, rowHeight} = useSelector(state => state.layout.layoutPageGridData);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const selectLayoutHandler = (id) => () => {
        dispatch(selectLayout(id));
        navigate('/config');
    }

    return (
        <>
            <div className='page-title'>
                <h3>Layout View</h3>
            </div>
            <ResponsiveGridLayout
                className="layout"
                layouts={layout}
                breakpoints={breakpoints}
                cols={cols}
                rowHeight={rowHeight}
                isDraggable={false}
                isResizable={false}>
                {
                    layoutsIds.map(currLayoutId => {
                        return (
                            <Card className='mini-layout-card' variant="outlined" key={currLayoutId} onClick={selectLayoutHandler(currLayoutId)}>
                                <MiniLayoutWrapper layoutId={currLayoutId} />
                            </Card>
                        )
                    })
                }
            </ResponsiveGridLayout>
        </>
    );
}

export default LayoutPage;