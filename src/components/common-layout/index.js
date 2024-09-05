import { auth } from "@/auth";

const { default: ReduxProvider } = require("@/index");


export default async function CommonLayout({children}){
    const getSession=await auth();
    return <ReduxProvider getSession={getSession}>{children}</ReduxProvider>

}