
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="min-h-screen">
            
            <Outlet />
            
            
        </div>
    );
};

export default Root;