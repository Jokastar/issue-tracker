"use client"; 

import Link from 'next/link';
import React from 'react'; 
import DropdownMenu from "./components/DropdownMenu"; 
import { usePathname } from 'next/navigation';
import {useSession} from "next-auth/react"; 

import classNames from 'classnames';
import { AiFillBug } from "react-icons/ai";




const NavBar = () => {
    const links = [{label:"Dashboard", href:"/dashboard"}, {label:"Issues", href:"/issues"}]; 
    const currentPath = usePathname();
    const {status, data} = useSession(); 
      
  return (
    <nav className='p-4 flex items-center justify-between space-x-6 border-b-2 border-solid border-gray-300'>
       <div className='flex items-center'>
       <Link href="/">
            <AiFillBug size={28}/>
        </Link>
        <ul className='flex space-x-4 mx-5 '>
            {links.map(link =>(
                <li key={link.label}>
                <Link href={link.href} className={
                    classNames({
                        'text-zinc-900':currentPath === link.href,
                        'text-zinc-500':currentPath !== link.href,
                        'hover:text-zinc-900 transitons colors':true
                    })
                }>{link.label}</Link>
                </li>
            ))}
        </ul>
        {status === "authenticated" && <span>{data?.user.name}</span>}
       </div>
        
      {status === "authenticated" ? <DropdownMenu avatar={data?.user.image}/> : <Link href="/api/auth/signin" className='text-zinc-600 hover:text-zinc-900 transitons colors'>Log in</Link>}
    </nav>
  )
}

export default NavBar; 