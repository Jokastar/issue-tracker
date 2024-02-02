"use client"; 

import React from 'react'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';



const NewIssue = () => {
    const {control, handleSubmit, register} = useForm(); 
    const router = useRouter();
    const  onSubmit = async (data) =>{
        await axios.post("/api/issues", data); 
        router.push("/"); 

    }
  return (
    <div className='mx-5 my-2'>
    <h2>Create a new issue</h2>
    <form  className="w-2/3 my-2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title" className='block'>Title</label>
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