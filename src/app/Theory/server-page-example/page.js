import fetchListOfProducts from '@/actions';


async function ServerActionsExample(){
const products=await fetchListOfProducts();

    return(
        <div>
            <h1>
                Server action example
            </h1>
            <ul>
                {
                    products && products.length > 0? (
                        products.map(product =>{
                            return (
                            <li>{product.title}</li>
                            )
                        })

                    ):(
                        <div>No Products</div>
                    )
                }
            </ul>
        </div>
    )
}

export default ServerActionsExample;