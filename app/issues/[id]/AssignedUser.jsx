"use client"; 
import React, {useState, useEffect} from 'react'; 
import AssignedUserButton from '@/app/components/AssignedUserButton';
import axios from "axios"; 
import { useQuery} from 'react-query';

const AssignedUser = () => {
  const [display, setDisplay] = useState("hidden"); 
  const [selectedUser, setSelectedUser] = useState(""); 
 
  const handleClick = () =>{
    setDisplay(prev =>  prev === "hidden" ? "block" : "hidden"); 
   }
  const handleSelectedUser = (user) =>{
      setSelectedUser(user);
      setDisplay(prev =>  prev === "hidden" ? "block" : "hidden");  
   }

   const {data:users, isLoading, error} = useQuery({
      queryKey:["users"],
      queryFn:()=> axios.get("/api/users").then(({data}) => data.users),
      staleTime: 60 * 1000, //60s
      retry: 3
   })
   
  if(error) return null; 
 
  return (
    <>
    <div>
      <button className="w-40 p-3 rounded bg-violet-700 text-white" onClick={handleClick}>Assigned User</button>
      <div className={`min-w-40 ${display}`}>
        <ul className="p-2 shadow bg-base-100 rounded-box w-full">
          {users && users.map(user=><li key={user.name}><AssignedUserButton user={user} onClick={handleSelectedUser} isSelected={user.name === selectedUser}/></li>)}
        </ul>
      </div>
    </div>
    </>
    
  )
}

export default AssignedUser; 