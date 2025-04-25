import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  
  const handleButtonClick = (e) => {
    e.preventDefault();
    router.push("/dashboard");
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
            
            <Input
              className="transition-all hover:shadow-[0_0_10px_rgba(32,107,81,0.7)]"
              id="name"
              placeholder="Enter eSIM Id"
            />
            <div className="mt-4">
              <button 
                type="button" 
                onClick={handleButtonClick}
                className=" bg-[rgb(32,107,81)] text-white px-4 py-2 rounded hover:bg-opacity-90"
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