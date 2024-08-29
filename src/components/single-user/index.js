'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

function SingleUserCard({user}){
    return (
        <Card>
  <CardHeader>
    <CardTitle>{user?.firstName} {user?.lastName}</CardTitle>
    <CardDescription>{user?.email}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{user?.address}</p>
  </CardContent>
  <CardFooter>

  </CardFooter>
</Card>


    )
}
export default SingleUserCard;