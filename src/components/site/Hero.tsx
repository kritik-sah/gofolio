import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="py-32 flex flex-col items-center justify-center gap-8">
      <div className="p-4 max-w-screen-md items-center justify-center text-center space-y-6">
        <h1 className="text-7xl font-medium">
          Build your{" "}
          <span className="text-crimson-500">portfolio in minute&apos;s</span>
        </h1>
        <p>
          Want to showcase your skills and tallent online and to the potential
          requters, we can help you with that.
          <strong className="text-crimson-500 font-medium">
            {" "}
            No more boring linkdin profile &quot;your wellcome :p&quot;
          </strong>
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <Button size={"lg"}>Create Portfolio</Button>
        <Button size={"lg"} variant={"outline"}>
          Hire Tallent
        </Button>
      </div>
      <div className="relative w-full h-64 border-b border-crimson-400 overflow-y-clip ">
        <div className="absolute top-12 left-0 bg-crimson-400 rounded-full aspect-square w-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Hero;
