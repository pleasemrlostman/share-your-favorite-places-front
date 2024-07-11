import { ReactNode } from "react";

export default function Layout({
  children,
  account,
}: {
  children: ReactNode;
  account: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-white">
      {children}
      {account}
    </div>
  );
}
