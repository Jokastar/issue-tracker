
import React from 'react'; 
import prisma from '@/prisma/client';
import Link from 'next/link';
import Badge from '@/app/components/Badge';
import { MdEdit } from "react-icons/md";
import ReactMarkdown from "react-markdown"; 


const IssueDetails = async ({params}) => {
    let id = params.id
   
    const issue = await prisma.issue.findUnique({
        where:{
            id:id
        }
    }) 

    if(!issue) return (<p>No issue</p>)
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
                <Link href={`/issues/${id}/editIssue`}>
                    <button className='flex items-center bg-indigo-700 text-white rounded p-3'>
                        <span className='mx-3'>Edit</span>
                        <MdEdit />
                    </button>
                </Link>
            </div>
        </div>
  )
}


export default IssueDetails; 