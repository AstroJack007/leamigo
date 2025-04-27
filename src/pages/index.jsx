import Image from "next/image";
import React,{useState} from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import esimData from "@/data/esimData.json";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [esimid,setesimid]=useState("");
  const [error, setError] = useState("");
  const handleInputChange=(e)=>{
    setesimid(e.target.value);
    setError("");
  }
  const handleButtonClick = (e) => {
    e.preventDefault();

    if(esimid==esimData.bookingId){
      router.push({
        pathname:'/dashboard',
        query:{id:esimid}
      })
    }else{
      setError("Enter correct eSIM Id");
    }
  };
  
  return (
    <div className="flex justify-center mt-40">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle
            className="text-4xl font-bold text-center"
            style={{ color: "rgb(32,107,81)" }}
          >
            Welcome
          </CardTitle>
        </CardHeader>
        <form>
          <div className="mx-10 mb-6">
            {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
            <Input
              className="transition-smooth hover:shadow-[rgba(32,107,81,0.7)]"
              id="name"
              placeholder="Enter eSIM Id"
              onChange={handleInputChange}
            />
            <div className="mt-4 flex justify-center">
              <button 
                type="button" 
                onClick={handleButtonClick}
                className="bg-[rgb(32,107,81)] text-white px-4 py-2 rounded hover:bg-opacity-90"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
}