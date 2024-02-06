"use client"; 

import React, {useState} from 'react'; 
import { useRouter } from 'next/navigation';
import axios from 'axios';


const DeleteButton = ({id}) => {
    const [isDeleting, setisDeleting] = useState(false); 
    const router = useRouter(); 
    const onDelete = async (id) => {
        try {
            setisDeleting(true); 
            const response = await axios.delete("/api/issues/" + id);
            
            if (response.status === 200) {
                // Successful deletion
                router.push("/issues"); 
                router.refresh();
            } else {
                // Handle unsuccessful response
                alert("Failed to delete issue: " + response.statusText);
            }
        } catch (error) {
            // Handle request error
            setisDeleting(false); 
            alert("Failed to delete issue: " + error.message);
        } finally {
            document.getElementById('my_modal_1').close(); 
        }
    }
    
    
  return (
    <>
        <button className="btn bg-red-500 hover:bg-red-700 font-normal text-base text-white rounded mx-4" onClick={()=>document.getElementById('my_modal_1').showModal()}>Delete issue</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm deletion</h3>
            <p className="py-4">Are you sure you want to delete this issue ? This action cannot be undone.</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Cancel</button>
                    </form>
                    <button className="btn bg-red-500 text-white" onClick={()=>onDelete(id)} disabled={isDeleting}>Delete {isDeleting && <span className="loading loading-spinner loading-sm text-white"></span>}</button>
                </div>
            </div>
        </dialog>

    </>
  )
}

export default DeleteButton