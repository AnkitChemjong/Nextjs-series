import AddNewUser from "@/components/add-newUser";
import { fetchUserAction } from "@/actions";
import SingleUserCard from "@/components/single-user";


async function UserManagement(){
    const data=await fetchUserAction();
    const users=data.users;
    return (
        <div className="p-20 max-w-6xl">
           <div className="flex justify-between">
            <h1 className="text-2xl font-bold border-2 border-black p-2">User-Management</h1>
             <AddNewUser/>
           </div>
           <div className="mt-6  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           {
                    users && users.length > 0? (
                        users.map(user =>{
                            return (
                           <SingleUserCard key={user.firstName} user={user}/>
                            )
                        })

                    ):(
                        <div>No User</div>
                    )
                }

           </div>
        </div>
    )
}

export default UserManagement;