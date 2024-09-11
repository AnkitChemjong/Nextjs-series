
import Header from "../header";
import {currentUser} from '@clerk/nextjs/server'
import { fetchProfileAction } from "@/actions";


async function CommonLayout({children}){
  const user=await currentUser();
  const profileInfo=await fetchProfileAction(user?.id);
    return (
        <div className="mx-auto p-6 max-w-7xl lg:px-8"> 
        {/* Header */}
        <Header
        profileInfo={profileInfo}
        user={JSON.parse(JSON.stringify(user))}/>
         {/* Header */}

         {/* Main */}
           <main>
            {children}
           </main>
         {/* Main */}

        </div>
    )
}

export default CommonLayout;