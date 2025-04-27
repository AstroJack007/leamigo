import React, { useState } from "react";
import { useRouter } from "next/router";
import esimData from "@/data/esimData.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const RechargeIndex = () => {
  const router = useRouter();
  const { id } = router.query;
  const planTextStyle = { color: "black" };
  const [plan,setplan]=useState(null);
 

  const handleRecharge=(plan)=>{
   alert(`You have succesfully recharged for ${plan.name}`);

   setTimeout(()=>{
    router.push({
      pathname:'/dashboard',
      query:{id},
    })
   },1000);
  }
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-4xl font-bold mb-10">Recharge Plans</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {esimData.availablePlans.map((plan, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between h-96 p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription className="text-xl font-semibold mt-2">{plan.price}</CardDescription>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col justify-center gap-2">
              <p style={planTextStyle} className="font-semibold">{plan.data}</p>
              <p style={planTextStyle} className="font-semibold">{plan.validity}</p>
              <p style={planTextStyle} className="font-semibold">{plan.speed}</p>
              {plan.support && (
                <p style={planTextStyle} className="font-semibold">
                  Support: {plan.support}
                </p>
              )}
              {plan.roaming && (
                <p style={planTextStyle} className="font-semibold">
                  Includes international roaming
                </p>
              )}
            </CardContent>

            <CardFooter className="mt-4">
              <Button className="w-full" onClick={()=>handleRecharge(plan)}>Recharge Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RechargeIndex;
