import { NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function GET(request){
    try {
        const users = await prisma.user.findMany() 
        return NextResponse.json({users:users}, {status:200}); 
    } catch (error) {
        return NextResponse.json({error:error.message}, {status:400}); 
    }
}