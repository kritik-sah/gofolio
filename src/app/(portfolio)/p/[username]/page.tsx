import Icon from "@/components/utils/Icon";
import React from "react";

const Portfolio = () => {
  return (
    <div className="w-full border border-crimson-100 bg-white rounded-2xl shadow-sm p-4 md:p-6 lg:p-8 space-y-4">
      <h1 className="text-3xl font-semibold ">About</h1>
      <p>
        Greetings! I&apos;m Kritik Sah, a front-end developer with over 3 years
        of expertise in web development. My background includes frontend
        leadership at a web3 firm, contributions to marketing agencies and
        online pharmacy e-commerce projects, and a strong interestin
        usercentricUI, blockchain development and open-source.
      </p>
      <h2 className="text-2xl font-medium mb-4">What I Do!</h2>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="p-6 w-full md:max-w-[49%] rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <Icon
            name="FaFigma"
            className="text-4xl text-crimson-600 flex-shrink-0"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Ui/Ux Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="p-6 w-full md:max-w-[49%] rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <Icon
            name="FaFigma"
            className="text-4xl text-crimson-600 flex-shrink-0"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Ui/Ux Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="p-6 w-full md:max-w-[49%] rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <Icon
            name="FaFigma"
            className="text-4xl text-crimson-600 flex-shrink-0"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Ui/Ux Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
        <div className="p-6 w-full md:max-w-[49%] rounded-2xl even:bg-crimson-200/30 odd:bg-crimson-200/60 flex items-start justify-between gap-4">
          <Icon
            name="FaFigma"
            className="text-4xl text-crimson-600 flex-shrink-0"
          />
          <div className="space-y-2">
            <h3 className="text-xl font-medium">Ui/Ux Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              euismod tincidunt volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
