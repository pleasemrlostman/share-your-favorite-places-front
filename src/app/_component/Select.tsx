"use client";

import { ReactNode } from "react";

import Button from "@/app/_component/Button";
import { useController } from "react-hook-form";

const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};

const Inner = () => {
  // const {
  //   field: { onChange },
  //   fieldState: { error },
  // } = useController({
  //   control,
  //   name,
  //   rules: { required: true, ...rules },
  // });

  return (
    <>
      <Button>{"기본타이틀"}</Button>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
};

export { Wrapper, Inner };
