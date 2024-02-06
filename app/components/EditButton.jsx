import React from 'react'; 
import { MdEdit } from "react-icons/md";
import Link from 'next/link';



const EditButton = ({id}) => {
  return (
    <Link href={`/issues/${id}/edit`}>
        <button className='flex items-center bg-indigo-600 text-white hover:bg-gray-400 rounded p-3'>
            <span className='mx-3'>Edit issue</span>
            <MdEdit />
        </button>
    </Link>
  )
}

export default EditButton