import Header from "@/components/Header";
import React from "react";

type BaseProps = {
  children: React.ReactNode;
};

function Base({ children }: BaseProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Base;
