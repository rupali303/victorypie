import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import FormPracticeMui from "../FormPracticeMui";
import DashBoard from "../Pages/DashBoard";

export const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<DashBoard/>}/>
            <Route path="Login" element={<FormPracticeMui/>}/>

        </Route>
    )
)