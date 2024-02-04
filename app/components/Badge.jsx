import React from 'react'

const Badge = ({children}) => {
    const statusColor = {
        "OPEN" : " badge badge-accent", 
        "CLOSE" : "badge badge-secondary",
        "IN_PROGRESS":"badge badge-primary"
    }
  return (
    <div className={`text-white ${statusColor[children]}`}>{children}</div>
  )
}

export default Badge