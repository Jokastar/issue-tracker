"use client"; 
import React, {useState, useEffect} from 'react'; 
import AssignedUserButton from '@/app/components/AssignedUserButton';
import axios from "axios"; 

const AssignedUser = () => {
  const [display, setDisplay] = useState("hidden"); 
  const [selectedUser, setSelectedUser] = useState(""); 
  const [users, setUsers] = useState([]); 
  const [error, setError] = useState(""); 
  
  const handleClick = () =>{
    setDisplay(prev =>  prev === "hidden" ? "block" : "hidden"); 
   }
  const handleSelectedUser = (user) =>{
      setSelectedUser(user);
      setDisplay(prev =>  prev === "hidden" ? "block" : "hidden");  
   }

   useEffect(()=>{
      const fetchData = async () =>{
        try {
          const {data:{users}} = await axios.get("/api/users");
          setUsers(users); 
        } catch (error) {
          setError(error.message); 
        }
      }
      fetchData(); 
   }, [])
   
   
  return (
    <>
    {error && <p>{error}</p>}
    <div>
      <button className="w-40 p-3 rounded bg-violet-700 text-white" onClick={handleClick}>Assigned User</button>
      <div className={`min-w-40 ${display}`}>
        <ul className="p-2 shadow bg-base-100 rounded-box w-full">
          {users.map(user=><li key={user.name}><AssignedUserButton user={user} onClick={handleSelectedUser} isSelected={user.name === selectedUser}/></li>)}
        </ul>
      </div>
    </div>
    </>
    
  )
}

export default AssignedUser; 