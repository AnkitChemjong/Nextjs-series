'use client'

import fetchListOfProducts from "@/actions";
import { useEffect, useState } from "react";

function ClientPageExample(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
    async function getListOfProducts(){
        setLoading(true);
        const data=await fetchListOfProducts();
        if(data){
            setProducts(data);
            setLoading(false);
        }
    }
    useEffect(()=>{
       getListOfProducts();
    },[]);
    if(loading){
        return (
                <div>
                    Loading the data
                </div>
        )
    }
    return(
        <div>
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

export default ClientPageExample;