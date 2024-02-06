"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios';
import IssueLink from './IssueLink';

const Issues =  async () => {
  const [error, setError] = useState(""); 
  const [issues, setIssues] = useState([]); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/issues");

        setIssues(response.data.issues);
        console.log(issues);
      } catch (error) {
        setError(error.message);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className='mx-4 my-4'>
      <div>Issues</div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Link href="/issues/new">
        <button className="btn btn-wide btn-primary my-3 ">New Issue</button>
      </Link>
      <table className="table table-zebra table-sm my-4">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Status</td>
            <td>CreatedAt</td>
          </tr>
        </thead>
        <tbody>
          {issues && issues.map((issue) => (
            <IssueLink key={issue.id} issue={issue}/>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Issues;
