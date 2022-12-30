import React from 'react';
import CardWitget from './CartWidget';
import brand from '../assets/Logo.png';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="w-full h-32 items-center flex flex-col brightness-95 bg-cover bg-center bg-no-repeat">
      <div className=' flex flex-row p-2 justify-between h-full w-full'>

          <div className="cursor-pointer">
            
            <NavLink to="/">
              <img className="w-48 h-auto  " src={brand} alt="logo" />
            </NavLink>
          </div>
          <nav>
            <ul className="flex text-black  gap-16 text-md font-normal">
              <li className='hover:text-red-600 hover:text-xl duration-500'>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className='hover:text-red-600 hover:text-xl duration-500'>
                <NavLink to="/productos/instrumentos">Instrumentos</NavLink>
              </li>
              <li className='hover:text-red-600 hover:text-xl duration-500'>
                <NavLink to="/productos/accesorios">Accesorios</NavLink>
              </li>
            </ul>
          </nav>
          <CardWitget />
      </div>
    </header>
  );
};

export default NavBar; 
