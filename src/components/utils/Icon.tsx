import React from "react";
import { IconType } from "react-icons";
import {
  FaAddressBook,
  FaArrowUpRightFromSquare,
  FaEnvelopeOpen,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLaptopFile,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegChessKnight,
  FaRegFileLines,
  FaUser,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { HiFolderOpen } from "react-icons/hi2";

interface DynamicIconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  className?: string;
}

const iconComponents: Record<string, IconType> = {
  FaAddressBook,
  FaArrowUpRightFromSquare,
  FaRegChessKnight,
  FaEnvelopeOpen,
  FaFigma,
  FaGithub,
  FaInstagram,
  FaLaptopFile,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaRegFileLines,
  FaUser,
  FaXTwitter,
  FaYoutube,
  HiFolderOpen,
};

const Icon: React.FC<DynamicIconProps> = ({ name, ...rest }) => {
  // Get the corresponding icon component based on the name
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.error(`Icon '${name}' not found`);
    return null;
  }

  return <IconComponent {...rest} />;
};

export default Icon;
