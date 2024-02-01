"use client"; 

import Link from 'next/link';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import classNames from 'classnames';


const NavBar = () => {
    const links = [{label:"Dashboard", href:"/dashboard"}, {label:"Issues", href:"/issues"}]; 
    const currentPath = usePathname(); 
  return (
    <nav className='p-4 flex items-center space-x-6 border-b-2 border-solid border-gray-300'>
        <Link href="/">
            <AiFillBug size={28}/>
        </Link>
        <ul className='flex space-x-6 '>
            {links.map(link =>(
                <Link href={link.href} key={link.label} className={
                    classNames({
                        'text-zinc-900':currentPath === link.href,
                        'text-zinc-500':currentPath !== link.href,
                        'hover:text-zinc-900 transitons colors':true
                    })
                }>{link.label}</Link>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar