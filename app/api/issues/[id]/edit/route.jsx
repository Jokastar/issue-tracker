import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import issueSchema from "@/app/IssueSchema";

export async function PATCH(request, {params:{id}}){
    const body = await request.json();
    const validation = issueSchema.safeParse(body); 

    if(!validation.success) return NextResponse.json(validation.error.format(), {status:400});
    
    const issue = await prisma.issue.findUnique({
        where:{
            id:id
        }
    })
    if(!issue) return NextResponse.json({error:"Invalid issue"}, {status:404}); 

    try {
        const updatedIssue = await prisma.issue.update({
            where:{id:id},
            data:{
                title:body.title,
                description:body.description
            }
        })
        return NextResponse.json(updatedIssue, {status:201})
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:400}); 
    } 

}