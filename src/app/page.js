import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product-card/page";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function Home() {
  const getSession=await auth();//gives session user is authenticated or not
if(!getSession?.user) redirect("/unauth-page");

  const getAllProducts=await fetchAllProducts();

  return (
   <div className="flex flex-col gap-10"> 
    <div className="min-h-[80vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
      {
        getAllProducts && getAllProducts.data && getAllProducts.data.length>0?
        (
               getAllProducts.data.map((productItem)=>{
                return(
                   <ProductCard item={productItem}/>
                )
               })
        ): 
        (<div>No Products</div>)
      }
    </div>
   </div>
  );
}
