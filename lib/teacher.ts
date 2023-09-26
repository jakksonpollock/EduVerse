import { auth } from "@clerk/nextjs";
import axios from "axios";

export const isTeacher = async (userId?: string | null) => {

  const { sessionClaims } = auth();
  if (!userId || !sessionClaims || sessionClaims == null) {
    return false;
  }
  if (sessionClaims.role === "teacher") {
    return true;
  }
  return false
}