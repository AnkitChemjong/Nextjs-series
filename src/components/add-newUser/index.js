"use client";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { addNewUserFormControls, userInitialState } from "@/utils";
import { addNewUserAction } from "@/actions";

function AddNewUser() {
  const [openDialog, setOpenDialog] = useState(false);
  const [addNewUserFormData,setAddNewUserFormData]=useState(userInitialState);
  const router=useRouter();

  function handleSaveButtonValid(){
    return Object.keys(addNewUserFormData).every((key)=>addNewUserFormData[key].trim() !== "");
  }

  async function handleAddNewUser(){
    const result=await addNewUserAction(addNewUserFormData);
    setOpenDialog(false);
    setAddNewUserFormData(userInitialState)
    router.refresh();
  }

  useEffect(()=>{
    router.refresh();
  },[])

  return (
    <div className="flex justify-between">
      <Button onClick={() => setOpenDialog(true)}>Add New User</Button>
      <Dialog open={openDialog} onOpenChange={()=>{setOpenDialog(false)
    setAddNewUserFormData(userInitialState)}}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form action={handleAddNewUser} className="grid gap-4 py-4 px-5">
            <div className="flex flex-col gap-5">
              {addNewUserFormControls.map((controlItem) => {
                return (
                  <div key={controlItem.name}>
                    <Label htmlFor={controlItem.name} className="text-right">
                      {controlItem.label}
                    </Label>
                    <Input
                    type={controlItem.type}
                      id={controlItem.name}
                      name={controlItem.name}
                      className="col-span-3"
                      placeholder={controlItem.placeHolder}
                      value={addNewUserFormData[controlItem.name]}
                      onChange={(event)=>setAddNewUserFormData({...addNewUserFormData,[controlItem.name]:event.target.value})}
                    />
                  </div>
                );
              })}
            </div>
          <DialogFooter>
            <Button className="disabled:opacity-55" disabled={!handleSaveButtonValid()} type="submit">Save</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
