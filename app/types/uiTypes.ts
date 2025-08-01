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
}
