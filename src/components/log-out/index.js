'use client'

import { logoutAction } from "@/action";
import { Button } from "@/components/ui/button";

function Logout(){
     async function handleLogout(){
        await logoutAction();
        alert("Logged out")
     }

    return(
    <Button onClick={handleLogout}>Logout</Button>
    )
}

export default Logout;