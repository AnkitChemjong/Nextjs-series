
import { fetchProductDetails } from '@/actions';
import AddToCartButton from '@/components/add-to-cart-button';


async function ProductDetails({params}){
    const {details}=params;
    
    const getProductDetails=await fetchProductDetails(details);


    return(
        <div className='max-w-6xl mx-auto p-2'>
            <div className='p-6'>
               <div className='grid items-start grid-cols-1 lg:grid-cols-5 gap-12'>
                 <div className='lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8'>
                    <img src={getProductDetails?.data?.thumbnail} alt={getProductDetails?.data?.title} 
                    className="w-4/5 rounded object-cover"/>
                    <hr className='border-black border-2 my-6'/>
                    <div className='flex flex-wrap gap-5 justify-center mx-auto'>
                            {
                             getProductDetails?.data?.images?.map((imageItem)=>{
                                return(
                                    <img src={imageItem} alt={imageItem} 
                                    className="w-24 cursor-pointer"/>
                                )
                             })
                            }
                    </div>
                 </div>
                 <div className='lg:col-span-2'>
                    <h2 className='text-3xl font-bold text-gray-900'>{getProductDetails?.data?.title}</h2>
                   <p className='mt-5 text-gray-800 text-xl'>{getProductDetails?.data?.price}</p>
                   <h3 className='text-lg font-bold text-gray-700'>{getProductDetails?.data?.description}</h3>
                   <AddToCartButton productItem={getProductDetails}/>
                 </div>
               </div>
            </div>
            
            </div>
    )
}

export default ProductDetails;