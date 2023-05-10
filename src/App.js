import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Description from "./routes/Description"
import Home from "./routes/Home";
  
function App() {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Home/>}/>
                <Route path="/movie/:id" element={<Description/>}/>
            </Routes>
        </Router>
    );
}
  
export default App;
