import {Card} from "@mui/material";
import {useSelector} from "react-redux";
import './ComponentPanel.css';

const ComponentsPanel = () => {
    const components = useSelector(state => state.components.componentsList);

    const dragStartHandler = comp => e => {
        e.dataTransfer.setData('component', comp.id);
    }

    return (
        <div className='comp-panel'>
            <h4 className='panel-title'>Components:</h4>
            {
                components.map(comp => {
                    return <Card variant="outlined" key={comp.id} draggable onDragStart={dragStartHandler(comp)} >{comp.component}</Card>
                })
            }
        </div>
    )
}

export default ComponentsPanel;