// "use client"

import { useSession } from "next-auth/react";


 export const useSessionDetail = () => {
    const session = useSession();
    const user = session?.data?.user;
    
    return user;
    }