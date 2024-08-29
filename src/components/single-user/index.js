'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "../ui/button";
  import {deleteUserAction} from '@/actions';
  import { useContext } from "react";
  import { userContext } from "@/context";
  

function SingleUserCard({user}){
    const {setCurrentEditedID,openDialog, setOpenDialog,setAddNewUserFormData}=useContext(userContext);
    async function handleUserDelete(currentUserId,revalidatePath){
        const result=await deleteUserAction(currentUserId,revalidatePath);
        console.log(result);

    }
    return (
        <Card>
  <CardHeader>
    <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
    <CardDescription>{user?.email}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{user?.address}</p>
  </CardContent>
  <CardFooter className="flex items-center justify-between">
     <Button onClick={()=>handleUserDelete(user?._id,"/user-management")}>Delete</Button>
     <Button onClick={()=>{
        setOpenDialog(true);
        setCurrentEditedID(user?._id);
        setAddNewUserFormData({
               firstName:user?.firstName,
               lastName:user?.lastName,
               email:user?.email,
               address:user?.address
        })
     }}>Edit</Button>
  </CardFooter>
</Card>


    )
}
export default SingleUserCard;