import React from "react";
import { useRouter } from "next/router";
import esimData from "@/data/esimData.json";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Dashboard = () => {
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = (e)=>{
    e.preventDefault();
    router.push({
      pathname:'/recharge',
      query:{id}

    });
  }

  return (
    <div>
      <h1
        className="text-center text-4xl font-bold "
        style={{ color: "rgb(32,107,81)" }}
      >
        Dashboard
      </h1>
      <div className="mt-4 flex justify-center">
        <Card className="w-[600] h-[150]">
          <CardContent>
            <p
              className="text-xl font-medium mb-2"
              style={{ color: "rgb(32,107,81)" }}
            >
              Welcome {id}
            </p>
            <div className="space-y-1">
              <h1
                className="text-lg font-medium"
                style={{ color: "rgb(32,107,81)" }}
              >
                Data Usage
              </h1>

              <Progress
                className="bg-gray-100 [&>div]:bg-[rgb(32,107,81)]"
                value={esimData.usage.usedData * 10}
              />
              <div className="flex items-center justify-between">
                <p className=" font-medium" style={{ color: "rgb(32,107,81)" }}>
                  Used: {esimData.usage.usedData}
                </p>
                <p className=" font-medium" style={{ color: "rgb(32,107,81)" }}>
                  Total: {esimData.usage.totalData}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center mt-10" >
        <Card className="w-65 mr-20" >
    
        <CardContent>
          <h1 className="font-bold text-2xl "   >Remaining Data</h1>
            <p className="font-bold text-2xl" >{esimData.plan.remainingData}</p>
            <p className="font-semibold mb-3">Available to use</p>
            <p className="flex justify-between "><span>Total Data </span> <span className="font-semibold">{esimData.usage.totalData}</span></p>
            <p className="flex justify-between "><span>usedData </span> <span className="font-semibold">{esimData.usage.usedData} GB</span></p>
            <p className="flex justify-between "><span>SMS Texts </span> <span className="font-semibold">{esimData.usage.smsTotal}</span></p>
            <p className="flex justify-between "><span>Voice Minutes</span> <span className="font-semibold">{esimData.usage.voiceTotal}</span></p>
            <p className="flex justify-between "><span>Used Voice</span> <span className="font-semibold">{esimData.usage.voiceUsed}</span></p>
            <p className="flex justify-between "><span>Valid Until </span> <span className="font-semibold">{esimData.plan.validUntil}</span></p>

          </CardContent>
          
        </Card>
        <Card className="w-65">
        <CardContent>
          <h1 className="font-bold text-2xl ">Current Session</h1>
            <p className="font-bold text-2xl" >{esimData.currentSession.usageMB} MB</p>
            <p className="font-semibold mb-3">last updated at 2:30pm</p>
            <p className="flex justify-between "><span>Session ID</span> <span className="font-semibold">{esimData.currentSession.sessionId}</span></p>
            <p className="flex justify-between "><span>IP Address </span> <span className="font-semibold"> 192.0.2.1</span></p>
           

          </CardContent>
        </Card>
      </div>
      <div className="flex justify-center">
      <Button variant="outline" className="mt-10 w-30 h-10" onClick={handleSubmit}>Recharge</Button>
      </div>
      
  
    </div>
  );
};

export default Dashboard;
