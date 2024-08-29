"use client"
import {createContext, useState} from 'react';
import {userInitialState } from "@/utils";

export const userContext=createContext(null);

export default function UserState({children}){
    const [currentEditedID,setCurrentEditedID]=useState(null);
    const [openDialog, setOpenDialog] = useState(false);
  const [addNewUserFormData,setAddNewUserFormData]=useState(userInitialState);
    return (
        <userContext.Provider value={{currentEditedID,setCurrentEditedID,addNewUserFormData,setAddNewUserFormData,openDialog, setOpenDialog}}>
            {children}
        </userContext.Provider>
    )
}