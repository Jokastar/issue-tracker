import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import {z} from "zod"

const createIssue = z.object({
    title:z.string().min(1, "Title is required").max(255),
    description:z.string().min(1, "Description is required")
})
export async function POST(request){
    const body = await request.json(); 
    const validation = createIssue.safeParse(body); 

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