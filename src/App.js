import './App.css';
import {Link as RouterLink, Route, Routes} from "react-router-dom";
import {AppBar, Link as MaterialLink} from "@mui/material";
import LayoutPage from "./pages/LayoutPage";
import ConfigurationPage from "./pages/ConfigurationPage";

function App() {
  return (
    <div className="App">
        <AppBar position="static">
            <nav>
                <MaterialLink className='material-link' underline="hover" component={RouterLink} to="/">Layout</MaterialLink>
                <MaterialLink className='material-link' underline="hover" component={RouterLink} to="/config">Configuration</MaterialLink>
            </nav>
        </AppBar>

        <Routes>
            <Route path='/' element={<LayoutPage/>} />
            <Route path='/config' element={<ConfigurationPage />} />
        </Routes>
    </div>
  );
}

export default App;
