import type { ReactNode } from "react";
import { Header } from "./Header/Header";

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header/>
    <main className="h-full w-full bg-white py-2 px-10 flex flex-col">
      {children}
    </main>
  </>
);