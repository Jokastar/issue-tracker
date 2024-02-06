
import React from 'react'; 
import prisma from '@/prisma/client';
import Badge from '@/app/components/Badge';
import EditButton from '@/app/components/EditButton';
import DeleteButton from '@/app/components/DeleteButton';
import ReactMarkdown from "react-markdown"; 
import { notFound } from 'next/navigation';


const IssueDetails = async ({params}) => {
    let id = params.id
   
    const issue = await prisma.issue.findUnique({
        where:{
            id:id
        }
    }) 

    if(!issue) notFound(); 

    return (
        <div className='grid grid-cols-2 gap-5 mx-5 my-7'>
            <div className='issueInfo'>
                <h1 className='mb-5 text-4xl font-semibold'>{issue.title}</h1>
                <div className='flex items-center'>
                    <Badge >{issue.status}</Badge>
                    <span className='mx-5'>{new Date(issue.createdAt).toDateString()}</span>
                </div>
                <div className='card bg-base-100 border border-slate-900 my-4'>
                    <div className='card-body prose'>
                        <ReactMarkdown>{issue.description}</ReactMarkdown>
                    </div>
                </div>  
            </div>
            <div className='EditIssue'>
                <EditButton id={id}/>
                <DeleteButton id={id}/>
            </div>
        </div>
  )
}


export default IssueDetails; 