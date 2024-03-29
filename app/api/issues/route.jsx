import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import {issueSchema} from "../../IssueSchema"; 

export async function GET (request){
   try {
        const issues = await prisma.issue.findMany(); 
        return NextResponse.json({issues:issues}, {status:200}); 
   } catch (error) {
        return NextResponse.json({error:error}); 
   }
}
export async function POST(request){
    const body = await request.json(); 
    const validation = issueSchema.safeParse(body); 

    if(!validation.success) return NextResponse.json(validation.error.format(), {status:400}); 

    try {
        const issue = await prisma.issue.create({
            data:{
                title:body.title,
                description:body.description
            }
        })
        return NextResponse.json(issue, {status:201})
        
    } catch (error) {
       return  NextResponse.json({error:error}, {status:500})
    }

}
