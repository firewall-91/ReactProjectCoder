import React from 'react'
import { Link } from 'react-router-dom';


const Item = ({ product }) => {
   
  return (
             <Link to={`/detail/${product.id}`}>
        <div className='flex flex-col flex-nowrap p-1 items-center  bg-neutral-200 border-1 border-white hover:bg-white-200 duration-500'>
            <h3 className=' w-full text-center text-md font-normal uppercase '>{ product.name }</h3>
            <img className='w-48 h-48 border-spacing-0 ;' src= {product.img} alt="" />
            <h3 className='bg-neutral-100 w-full text-center text-black font-bold capitalize'>U$D{ product.price }</h3>
            
            <h3 className='bg-neutral-100 w-full text-center text-black font-bold uppercase'>{ product.platforms }</h3>
            
        </div>
             </Link>
  );
};

export default Item;