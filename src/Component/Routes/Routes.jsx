import Home from "../Home/Home";
import Root from "../Layout/Root";
import {
    createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);
export default router;