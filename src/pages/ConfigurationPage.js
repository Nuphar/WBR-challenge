import {useSelector} from "react-redux";
import ComponentsPanel from "../components/ComponentsPanel";
import './ConfigurationPage.css';
import RegularLayoutWrapper from "../components/RegularLayoutWrapper";


const ConfigurationPage = () => {
    const selectedId = useSelector(state => state.layout.selectedLayout);

    return (
        <>
            <div className='page-title'>
                <h3>Configuration View</h3>
            </div>
            <div className='config-page'>
                <ComponentsPanel/>
                <RegularLayoutWrapper layoutId={selectedId}/>
            </div>
        </>
    );
}

export default ConfigurationPage;