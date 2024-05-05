"use client"
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function PrivateRoute({ children }) {

    const router = useRouter()

    const {data: session} = useSession();
    console.log(session, "inside private route");
    
            {useEffect(() => {
                if (!session?.user) {
                  router.push(`/login`)
                }
              }, [session?.user, router])
            
              if (!session?.user) {
                return null
              }
                return children;
            }
    
}
