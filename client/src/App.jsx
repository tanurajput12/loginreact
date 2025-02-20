import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import Display from "./display";
import Search from "./Search";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route path="admin" element={<Admin/>}/>
      <Route path="Dashboard" element={<Dashboard/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="Search" element={<Search/>}/>
      

      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;