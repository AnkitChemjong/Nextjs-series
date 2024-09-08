import Header from "../header";
function CommonLayout({children}){
    return (
        <div className="mx-auto p-6 max-w-7xl lg:px-8"> 
        {/* Header */}
        <Header/>
         {/* Header */}

         {/* Main */}
           <main>
            {children}
           </main>
         {/* Main */}

        </div>
    )
}

export default CommonLayout;