import React from 'react'
import Link from 'next/link'
import Badge from '../components/Badge'

const IssueLink = ({issue}) => {
  return (
    
        <tr key={issue.id}>
              <td>{issue.title}</td>
              <td>{issue.description}</td>
              <td>{<Badge>{issue.status}</Badge>}</td>
              <td>{new Date(issue.createdAt).toDateString()}</td>
              <td><Link href={`/issues/${issue.id}`}><button>show issue</button></Link></td>
            </tr>

  )
}

export default IssueLink