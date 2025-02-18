import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="admin" element={<Admin/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
      

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;