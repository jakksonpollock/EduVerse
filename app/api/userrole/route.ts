import { NextResponse } from 'next/server';
import { auth, clerkClient } from "@clerk/nextjs";
 
export async function POST(req: Request) {
  try{
    const { role } = await req.json();
    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: role,
      }
    });
    console.log(role) 
    return NextResponse.json({ success: true });
    } catch (error) {
      console.log("[USERROLE]", error);
      return new NextResponse("Internal Error", { status: 500 });
  }
  
}
