import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import {patchIssueSchema} from "@/app/IssueSchema";

export async function PATCH(request, {params:{id}}){
    const body = await request.json();

    const {assignedToUserId, title , description} = body; 
    
    if(assignedToUserId){
        const user = await prisma.user.findUnique({
            where:{
                id:assignedToUserId
            }
        })
        if(!user){
            return NextResponse.json({error:"Invalid user"}, {status:400})
        }
    }

    const validation = patchIssueSchema.safeParse(body); 

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
                title,
                description,
                assignedToUserId  
            }
        })
        return NextResponse.json(updatedIssue, {status:201})
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:400}); 
    } 

}

export async function DELETE(request, {params:{id}}){
    const issue = await prisma.issue.findUnique({
        where:{id:id}
    })
    if(!issue) return NextResponse.json({error:"Invalid issue"}, {status:400});
    try {
        await prisma.issue.delete({
            where:{id:id}
        })
        return NextResponse.json({message:"issue deleted"}, {status:200}); 
        
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:400}); 
    }
    
}