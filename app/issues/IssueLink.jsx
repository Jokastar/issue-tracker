import React from 'react'
import Link from 'next/link'
import Badge from '../components/Badge'

const IssueLink = ({issue}) => {
  return (
    
        <tr key={issue.id}>
              <td><Link className=' text-indigo-400 hover:text-indigo-700'href={`/issues/${issue.id}`}>{issue.title}</Link></td>
              <td>{issue.description}</td>
              <td>{<Badge>{issue.status}</Badge>}</td>
              <td>{new Date(issue.createdAt).toDateString()}</td>
            </tr>
  )
}

export default IssueLink