"use client"; 

import React from 'react'

const DeleteButton = () => {
  return (
    <>
        <button className="btn bg-red-600 font-normal text-base text-white rounded p-3 px-6" onClick={()=>document.getElementById('my_modal_1').showModal()}>Delete issue</button>
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
            <h3 className="font-bold text-lg">Confirm deletion</h3>
            <p className="py-4">Are you sure you want to delete this issue ? This action cannot be undone.</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Cancel</button>
                    </form>
                    <button className="btn bg-red-500 text-white">Delete</button>
                </div>
            </div>
        </dialog>
    </>
  )
}

export default DeleteButton