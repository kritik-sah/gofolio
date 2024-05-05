import React from "react";
import Icon from "../utils/Icon";

const Sidebar = () => {
  return (
    <div className="w-full max-w-sm border border-crimson-100 bg-white rounded-2xl shadow-sm p-4 md:p-6">
      <div className="relative mb-32">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex items-center justify-center">
          <div className="h-52 w-52 rounded-2xl bg-crimson-800"></div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold">Kritik Sah</h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="px-4 py-2 rounded-xl bg-crimson-100/50">
            Frontend Web developer
          </span>
          <span className="px-4 py-2 rounded-xl bg-crimson-100/50">
            Solidity Engineer
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-lg">
          <span className="h-10 w-10 rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center">
            <Icon name="FaLinkedin" />
          </span>
          <span className="h-10 w-10 rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center">
            <Icon name="FaInstagram" />
          </span>
          <span className="h-10 w-10 rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center">
            <Icon name="FaXTwitter" />
          </span>
          <span className="h-10 w-10 rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center">
            <Icon name="FaGithub" />
          </span>
          <span className="h-10 w-10 rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center">
            <Icon name="FaYoutube" />
          </span>
        </div>
        <div className="w-full flex flex-col gap-4 p-4 bg-crimson-100/40 rounded-2xl">
          <div className="flex items-center justify-start gap-3">
            <div className="h-16 w-16 text-xl rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center shadow-sm">
              <Icon name="FaPhone" />
            </div>
            <div className="space-y-1">
              <p>Phone</p>
              <h3 className="text-lg font-medium">+91 7021245436</h3>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="h-16 w-16 text-xl rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center shadow-sm">
              <Icon name="FaEnvelopeOpen" />
            </div>
            <div className="space-y-1">
              <p>Email</p>
              <h3 className="text-lg font-medium">Example@Mail.Com</h3>
            </div>
          </div>
          <div className="flex items-center justify-start gap-3">
            <div className="h-16 w-16 text-xl rounded-xl bg-crimson-100/50 hover:bg-crimson-100/80 transition-all ease-in-out flex items-center justify-center shadow-sm">
              <Icon name="FaLocationDot" />
            </div>
            <div className="space-y-1">
              <p>Location</p>
              <h3 className="text-lg font-medium">Mumbai, India</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
