import React from 'react'
import IssueForm from '../../IssueForm'; 

const EditIssue = async ({params}) => {
  let id = params.id
   
  const issue = await prisma.issue.findUnique({
      where:{
          id:id
      }
  }) 

  if(!issue) notFound(); 
  return (
    <IssueForm issue={issue}/>
  )
}

export default EditIssue