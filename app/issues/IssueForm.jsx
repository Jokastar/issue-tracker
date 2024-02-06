"use client"; 

import React, {useState} from 'react'
import ErrorMessage from '@/app/components/ErrorMessage';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import createIssueSchema from '@/app/IssueSchema';
import {zodResolver} from "@hookform/resolvers/zod";
import axios from 'axios';


const IssueForm = ({issue}) => {
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); 
    const {control, handleSubmit, register, formState:{errors}} = useForm({
        resolver:zodResolver(createIssueSchema)
    }); 
    const router = useRouter();
    const onSubmit = async (data) =>{
        try {
            setIsSubmitting(true); 
            issue ?  await axios.patch("/api/issues/"+issue.id+"/edit", data): await axios.post("/api/issues", data); 
            router.push("/");    
        } catch (error) {
            setError("An error occured"); 
            setIsSubmitting(false); 
        }

    }
  return (
    <div className='mx-5 my-2'>
    {issue ? <h1>Edit issue</h1> : <h1>Create new issue</h1>}
    {error && <ErrorMessage >{error}</ErrorMessage>}
    <form  className="w-2/3 my-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="title" defaultValue={issue?.title} className="input input-bordered w-full my-3" {...register("title")}/>
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
        <Controller
        name='description'
        control={control}
        defaultValue={issue?.description}
        render={({field})=>(
            <SimpleMDE {...field}placeholder='Description'/>
        )}
        />
        {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
        <button className="btn btn-primary" type='submit' disabled={isSubmitting}>
            Send
            {isSubmitting && <span className="loading loading-spinner loading-sm text-white"></span>}
        </button>
    </form>
    </div>
  )
}

export default IssueForm; 
