import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import PropTypes from 'prop-types'; // ES6
// import logo from '../assets/images/icons/logo.png'

const Navbar = ({color}) => {
  const {user,logOutUser}=useContext(AuthContext)


  const logOutHandel=()=>{
    logOutUser()
    .then()
    .catch()
  }
  
  return (
    <div className={`navbar  w-10/12 m-auto ${color} font-semibold`} >
      <div className="flex-1">
        <p className=" text-2xl font-bold text-red-600">Travel Guru</p>
      </div>
      <div className="flex-none font-semibold">
        <ul className="menu menu-horizontal px-1">
          <NavLink to={'/'}><li><a>Home</a></li></NavLink>
          <NavLink to={'/destination'}><li><a>Destination</a></li></NavLink>
          <NavLink><li><a>Blog</a></li></NavLink>
          <NavLink><li><a>Contact</a></li></NavLink>
        </ul>
      </div>
      <div>
        <p className=' text-green-600 mr-4 '>{user&& `User:${user.displayName}`}</p>
        {
          user? <Link > <button onClick={logOutHandel} className=' btn btn-sm bg-yellow-400 '> LOGOUT</button></Link> : <Link to={'/login'}> <button className=' btn btn-sm bg-yellow-400 '> LOGIN</button></Link>
        }
      
       
      </div>
    </div>
  );
};

export default Navbar;
Navbar.propTypes = {

  color: PropTypes.string.isRequired
}