"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios';

const Issues = () => {
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
    <>
      <div>Issues</div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <table>
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
            <tr key={issue.id}>
              <td>{issue.title}</td>
              <td>{issue.description}</td>
              <td>{issue.status}</td>
              <td>{issue.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/issues/new">
        <button className="btn btn-wide btn-primary">New Issue</button>
      </Link>
    </>
  );
};

export default Issues;
