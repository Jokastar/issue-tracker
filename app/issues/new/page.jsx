"use client"; 

import React, {useState} from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';



const NewIssue = () => {
    const [error, setError] = useState("");
    const {control, handleSubmit, register} = useForm(); 
    const router = useRouter();
    const  onSubmit = async (data) =>{
        try {
            await axios.post("/api/issues", data); 
            router.push("/");    
        } catch (error) {
            setError("An error occured"); 
        }

    }
  return (
    <div className='mx-5 my-2'>
    <h2>Create a new issue</h2>
    {error && <p className='bg-red-300 text-red-800 rounded p-3 w-2/3 mt-2'>{error}</p>}
    <form  className="w-2/3 my-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="title" className="input input-bordered w-full my-3" {...register("title")}/>
        <Controller
        name='description'
        control={control}
        defaultValue=""
        render={({field})=>(
            <SimpleMDE {...field}placeholder='Description'/>
        )}
        />
        <button className="btn btn-primary" type='submit'>Send</button>
    </form>
    </div>
  )
}

export default NewIssue