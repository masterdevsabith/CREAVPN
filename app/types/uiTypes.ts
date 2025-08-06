import { ReactNode } from "react";

export interface ButtonProps {
  content: string;
  icon?: ReactNode;
  className?: string;
}

export interface StatusProps {
  content: string;
  classname?: string;
}

export interface BaseCardProps {
  flag: string;
  location: string;
  cordinate: string;
  status: boolean;
  classname?: string;
}

export interface MainCardProps {
  logo: string;
  status: boolean;
  time: string;
  flag: string;
  location: string;
  cordinate: string;
  download_speed: string;
  upload_speed: string;
  classname?: string;
}

export interface FeatureCardProps {
  image: string;
  heading: string;
  subtitle: string;
  className?: string;
}

export interface FloatingFlagProps {
  image: string;
  country: string;
  servers: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  alignment: string;
  classname?: string;
}
