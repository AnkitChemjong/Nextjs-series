const { default: ReduxProvider } = require("@/index");


export default async function CommonLayout({children}){
    return <ReduxProvider>{children}</ReduxProvider>

}