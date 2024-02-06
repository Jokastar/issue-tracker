"use client"; 

/*import React, {useState} from 'react'
import ErrorMessage from '@/app/components/ErrorMessage';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import createIssueSchema from '@/app/createIssueSchema';
import {zodResolver} from "@hookform/resolvers/zod"; 
import axios from 'axios'; */

import IssueForm from "../IssueForm"; 



const NewIssue = () => {
   
  return (
   <IssueForm issue={null}/>
  )
}

export default NewIssue