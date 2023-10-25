import React from "react";
import { IconType } from "react-icons";

interface CustomIconProps {
  icon: IconType;
  size: number;
}

const CustomIcon: React.FC<CustomIconProps> = ({ icon, size }) => {
  return React.createElement(icon, { size });
};

export default CustomIcon;
