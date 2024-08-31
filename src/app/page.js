import { fetchAuthUserAction } from "@/action";

export default async function Home() {
  const currentUser=await fetchAuthUserAction();

  return (
   <div>
    <h1>Next Js auth</h1>
    <h1>{currentUser.data?.userName}</h1>
   </div>
  );
}
