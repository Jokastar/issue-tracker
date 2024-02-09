import React from 'react'; 
import { RiPassValidFill } from "react-icons/ri";


const AssignedUserButton = ({user, onClick, isSelected}) => {
    
  return (
    <button onClick={()=>onClick(user.name)}type='button' className='relative w-full cursor-default border-none rounded-sm bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 hover:bg-indigo-500'>
        <span className='flex items-center'>
        <div className="w-6 h-6"><img className='object-cover rounded-full' src={user.image}/></div>
        <span className="ml-3 block truncate">{user.name}</span>
        {isSelected && <RiPassValidFill className='ml-3'/>}
        </span>
      </button>
  )
}

export default AssignedUserButton; 