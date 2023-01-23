import type { ReactNode } from "react";

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout: React.FC = ({ children }: LayoutProps) => (
  <>
    <main className="h-full w-full bg-white py-2 px-10 flex flex-col">
      {children}
    </main>
  </>
); 