'use client';
import Stripe from "stripe"
import { Card } from "./ui/card"
import Image from "next/image";
import { useEffect, useState } from "react"
interface props {
    products : Stripe.Product[];
}
export const CarouselData = ({products }: props)=> {
    const [current, setCurrent] =useState<number>(0)
    useEffect(() => {
        const interval = setInterval(()=>{
            setCurrent((prev) => (prev +1) % products.length );
        },3000);
        return () => clearInterval(interval);
       },[products.length]);
       
       const currentProduct = products?.[current]; 


       const price = currentProduct?.default_price as Stripe.Price;
    return <Card>
    {currentProduct?.images && currentProduct?.images[0] && (
        <div>
            <Image
                src={currentProduct?.images[0]}
                alt={currentProduct?.name || "Product image"}
                width={300}
                height={300}
            />
        </div>
    )}
    </Card>
}
