import React from 'react'
import Link from 'next/link';

const DropdownMenu = ({avatar}) => {
  return (
    <>
        <div className="dropdown  dropdown-left	dropdown-hover">
        <div tabIndex={0} role="button"className="avatar">
            <div className="w-10 rounded-full">
            <img src={avatar} />
        </div>
        </div>    
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
             <li>
                <Link href="/api/auth/signout" className='text-zinc-600 hover:text-zinc-900 transitons colors'>Sign out</Link>
            </li>
            </ul>
        </div>
    </>
  )
}

export default DropdownMenu; 