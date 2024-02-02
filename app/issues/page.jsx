
import React from 'react'
import Link from 'next/link'


const Issues = () => {
  
  return (
    <>
      <div>Issues</div>
      <Link href="/issues/new">
      <button className="btn btn-wide btn-primary">new Issue</button>
      </Link>
    </>
  )
}

export default Issues