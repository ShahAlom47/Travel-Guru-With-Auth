import { useContext } from "react";
import { AuthContext } from "../../Shared Component/AuthProvider";
import Navbar from "../../Shared Component/Navbar";
import { Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const Destination = () => {

    const {user,logOutUser}=useContext(AuthContext)
    const location = useLocation();
    console.log(location);


    if(user){
        return (
            <div className="  min-h-screen absolute inset-0 bg-cover bg-center " style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1473442240418-452f03b7ae40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
                <Navbar color={'text-gray-300'}></Navbar>
    
                
                
            </div>
        );  
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>

    
};

export default Destination;