import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import Login from "../Login/Login";
import SignIn from "../SignIn/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
                loader: () => fetch('../donation.json')
            },
            {
                path: '/login',
                element: <Login></Login>,

            },
            {
                path: '/signup',
                element: <SignIn></SignIn>,

            },
            {
                path: '/donation',
                element: <PrivateRoute><Donation></Donation></PrivateRoute>,
            },
            {
                path: '/statistics',
                element: <PrivateRoute><Statistics></Statistics></PrivateRoute>,
                loader: () => fetch('../donation.json')
            }
        ]
    }
])
export default router;