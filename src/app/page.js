import { fetchAuthUserAction } from "@/action";
import { redirect } from "next/navigation";
import Logout from "@/components/log-out";

export default async function Home() {
  const currentUser=await fetchAuthUserAction();
  if(currentUser?.success===false){
    redirect('/sign-in');
  }


  return (
   <div>
    <h1>Next Js auth</h1>
    <h1>{currentUser.data?.userName}</h1>
    <Logout/>
   </div>
  );
}
