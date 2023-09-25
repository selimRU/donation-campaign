import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import CategoryDetails from "../CategoryDetails/CategoryDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('donation.json')
            },
            {
                path: '/details/:id',
                element: <CategoryDetails></CategoryDetails>,
                loader: () => fetch('../donation.json')
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('../donation.json')
            }
        ]
    }
])
export default router;