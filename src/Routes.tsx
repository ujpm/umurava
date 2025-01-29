
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
// import HomepageDashboard from "./pages/HomepageDashboard";
// import ABOUT from "pages/ABOUT";
export default function ProjectRoutes(){
    const element = useRoutes ([
        {path: "/", element: <Home />},
        // {
        //     path:"homepagedashboard",
        //     element: <HomepageDashboard />
        // }
    ]);
    return element;
}
