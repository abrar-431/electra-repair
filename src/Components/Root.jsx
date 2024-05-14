import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="bg-base-100">
            <Header></Header>
            <div className="w-5/6 mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;