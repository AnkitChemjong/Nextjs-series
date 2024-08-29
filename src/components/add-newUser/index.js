"use client";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { userContext } from "@/context";
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
import { editUserAction } from "@/actions";

function AddNewUser() {
  const {
    currentEditedID,
    setCurrentEditedID,
    addNewUserFormData,
    setAddNewUserFormData,
    openDialog,
    setOpenDialog,
  } = useContext(userContext);
  const [loading,setLoading]=useState(false);

  function handleSaveButtonValid() {
    return Object.keys(addNewUserFormData).every(
      (key) => addNewUserFormData[key].trim() !== ""
    );
  }

  async function handleAddNewUser() {
    setLoading(true);
    const result =currentEditedID === null
        ? await addNewUserAction(addNewUserFormData, "/userManagement")
        : await editUserAction(
            currentEditedID,
            addNewUserFormData,
            "/userManagement"
          );
    setOpenDialog(false);
    setAddNewUserFormData(userInitialState);
    setLoading(false);
  }

  return (
    <div className="flex justify-between">
      <Button onClick={() => setOpenDialog(true)}>Add New User</Button>
      <Dialog
        open={openDialog}
        onOpenChange={() => {
          setOpenDialog(false);
          setAddNewUserFormData(userInitialState);
          setCurrentEditedID(null);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>
              {currentEditedID === null ? "Add New User" : "Edit User"}
            </DialogTitle>
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
                      onChange={(event) =>
                        setAddNewUserFormData({
                          ...addNewUserFormData,
                          [controlItem.name]: event.target.value,
                        })
                      }
                    />
                  </div>
                );
              })}
            </div>
            <DialogFooter>
              <Button
                className="disabled:opacity-55"
                disabled={!handleSaveButtonValid()}
                type="submit"
              >
                {loading? "loading...":"Save"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddNewUser;
