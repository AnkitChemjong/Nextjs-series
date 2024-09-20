'use client'

import { createPriceIdAction, createStripePaymentAction, updateProfileAction } from "@/actions";
import { membershipPlans } from "@/utils";
import { loadStripe} from "@stripe/stripe-js";
import CommonCard from "../common-card";
import JobIcon from "../job-icon";
import { Button } from "../ui/button";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
const stripePubK=process.env.NEXT_PUBLIC_STRIPE_PUB_KEY;

const stripePromise=loadStripe(
    stripePubK
)

function MemberShip({profileInfo}){
    const pathName=useSearchParams();

async function updateProfile(){
    const fetchCurrentPlanFromSessionStorage=await JSON.parse(sessionStorage.getItem('currentPlan'))
    await updateProfileAction({
        ...profileInfo,
        isPremiumUser:true,
        memberShipType:fetchCurrentPlanFromSessionStorage?.type,
        memberShipStartDate:new Date().toString(),
        memberShipEndDate: new Date(
            new Date().getFullYear() +
              fetchCurrentPlanFromSessionStorage?.type ===
            "basic"
              ? 1
              : fetchCurrentPlanFromSessionStorage?.plan === "teams"
              ? 2
              : 5,
            new Date().getMonth(),
            new Date().getDay()
          ),
    },'/membership');
}

    useEffect(()=>{
        if(pathName.get('status')==="success") updateProfile()

    },[pathName])


    async function handlePayment(currentPlan){
        const stripe=await stripePromise;
        const extractPriceId=await createPriceIdAction({
            amount:Number(currentPlan?.price)
        })
    if(extractPriceId){
        sessionStorage.setItem('currentPlan',JSON.stringify(currentPlan));
        const result =await createStripePaymentAction({
            lineItems:[
                {
                    price:extractPriceId?.id,
                    quantity:1
                }
            ]
        })

        await stripe.redirectToCheckout({
            sessionId:result?.id
        })
    }
    }
    return (
<div className="mx-auto max-w-7xl">
    <div className="flex items-baseline justify-center border-b pb-6 pt-24 ">
        <h1 className="text-4xl font-bold tracking-tight text-gray-950">
           {
            profileInfo?.isPremiumUser? "Your are a Premium User":"Choose Your Best Plan"
           }
        </h1>
        <div>
        {profileInfo?.isPremiumUser ? (
            <Button className="flex h-11 items-center justify-center px-5">
              {
                membershipPlans.find(
                  (planItem) => planItem.type === profileInfo?.memberShipType
                ).heading
              }
            </Button>
          ) : null}
        </div>

    </div>
    <div className="py-20 pb-24 pt-6">
        <div className="container mx-auto p-0 space-y-8">
            <div className="grid grid-cols-1 gap-x-4 pag-y-8 md:grid-cols-2 lg:grid-cols-3">
             {
                membershipPlans?.map(plan=><CommonCard
                icon={
                    <div className="flex justify-between">
                     <div><JobIcon/></div>
                     <h1 className="font-bold text-2xl">{plan.heading}</h1>
                    </div>
                }
                title={`${plan.price} ${plan.type==='basic'? "/month":plan.type==='teams'? "/6 month":"/year"}`}
                description={plan.type}
                footerContent={
                    profileInfo?.memberShipType === "enterprise" ||
                    (profileInfo?.memberShipType === "basic" && index === 0) ||
                    (profileInfo?.memberShipType === "teams" &&
                    index >= 0 &&
                    index < 2 ? null : (
                      <Button
                        onClick={() => handlePayment(plan)}
                        className="disabled:opacity-65 dark:bg-[#fffa27] flex h-11 items-center justify-center px-5"
                      >
                        {profileInfo?.memberShipType === "basic" ||
                        profileInfo?.memberShipType === "teams"
                          ? "Update Plan"
                          : "Get Premium"}
                      </Button>
                    ))
                  }
                />)
             }
            </div>

        </div>

    </div>
</div>
    )
}

export default MemberShip;