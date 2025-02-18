import { Link,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Admin from "./Admin";
const Layout=()=>{
    return(
        <>

    <Header/>
    <Admin/>
    <Footer/>
    
      <Outlet/>
    
    www.hello world . com here is the name
        </>
    )
}
export default Layout;
  