import { Link } from "react-router-dom";
import Navbar from "../../Shared Component/Navbar";
import { useContext, useState } from "react";
import fb from '../../assets/images/icons/fb.png'
import google from '../../assets/images/icons/google.png'
import { AuthContext } from "../../Shared Component/AuthProvider";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LogIn = () => {
    const [errorMsg, setErrorMsg] = useState(null)
    const [successMsg, setsuccessMsg] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();

console.log(location);
    const {googleLogIn,loginUser}=useContext(AuthContext);

    const loginHandel = (e) => {
        // reset msg 
        setErrorMsg('')
        setsuccessMsg('')

        e.preventDefault();
        const data = new FormData(e.target);
        const email = data.get('email')
        const password = data.get('password')
        const confirmPass = data.get('confirmPass')

       ;

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            setErrorMsg('Please Provide valid email')
            return
        }
      else  if (password.length<6) {
            setErrorMsg('Password should be must 6 character or long')
            return
        }
      else  if (!/[A-Z]/.test(password)) {
            setErrorMsg('use a upper case letter')
            return
        }
      else  if (password!=confirmPass) {
            setErrorMsg('comfirm password not mach')
    
            return
        }

       console.log(email,password);
        loginUser(email,password)
        .then(() => {
             setsuccessMsg('Create user success')
             e.target.reset()
             navigate(location.state? location.state:'/')
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            setErrorMsg(errorMessage)
        });

    }

    const googleLogin =()=>{
        googleLogIn()
        .then()
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
          

    }


    return (
        <div className="bg-white min-h-screen">
            <Navbar color={'text-gray-500'}></Navbar>


            <div className="w-6/12 m-auto border-2 rounded-xl mt-9 p-8">

                <h1 className="text-xl  font-bold"> Create an account</h1>

                <form onSubmit={loginHandel} className="mt-6" >

                 
                    <div className="p-4 flex  flex-col">
                        <label htmlFor="email" className=" font-bold p-1">Email</label>
                        <input className="p-2 border-t-2" type="email" name="email" id="email" placeholder="Your Email" />
                    </div>
                    <div className="p-4 flex  flex-col">
                        <label htmlFor="password" className=" font-bold p-1">Password</label>
                        <input className="p-2 border-t-2" type="text" name="password" id="password" placeholder="Password" />
                    </div>
                    <div className="p-4 flex  flex-col">
                        <label htmlFor="confirmPass" className=" font-bold p-1">Confirm Passwor</label>
                        <input className="p-2 border-t-2" type="text" name="confirmPass" id="confirmPass" placeholder="Confirm Passwor" />
                    </div>

                    <div className="p-4 flex  flex-col">
                        <p className="text-red-400">{errorMsg} </p>
                        <p className="text-green-400">{successMsg} </p>
                        <input className="btn bg-yellow-400 rounded-sm w-full font-bold mt-3" type="submit" value="LogIn" />
                    </div>

                </form>
                <div >

                    <h1 className="font-semibold text-center">Create a Account?
                        <Link to={'/register'}><button className="btn btn-link">Register</button></Link></h1>
                </div>

            </div>



            <div className='my-8   '>
                <hr className='border-t-2 border-gray-400 w-6/12 m-auto' />
                <p className=' relative -top-3 left-1/2 font-semibold p-1 border-2  border-gray-600 bg-slate-100 rounded-lg inline'>OR</p>
            </div>

            <div className="w-6/12 m-auto px-6 mb-10 ">

                <div className="flex items-center gap-3  border-2 rounded-full p-2 mb-4">
                    <img className=" w-10 h-10 rounded-full" src={fb} alt="" />
                    <p className=" font-semibold text-center">Continue With Facebook</p>
                </div>
                <div onClick={googleLogin} className="flex items-center gap-3  border-2 rounded-full p-2">
                    <img className=" w-10 h-10 rounded-full" src={google} alt="" />
                    <p className=" font-semibold text-center">Continue With Google</p>
                </div>

            </div>




        </div>
    );
};

export default LogIn;