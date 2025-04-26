import React from "react";

interface StackProps {
  children?: React.ReactNode;
  className?: string;
}

export default function Stack({ children = null, className = "" }: StackProps) {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
}
