import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashboard from "../pages/Dashboard";
import MuiLoginForm from "../components/MuiLoginForm";
// import MuiSignupForm from "../components/MuiSignupForm"
// import Products from "../pages/Products";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>

        <Route index element={<Dashboard/>}/>
        <Route path="login" element={<MuiLoginForm/>}/>
        <Route path="signup" element={<MuiSignupForm/>}/>
        {/* <Route path="products" element= {<Products/>}/> */}
        </Route>
    )
)