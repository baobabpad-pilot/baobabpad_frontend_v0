import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Provider as NextAuthProvider } from "next-auth/react";


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <NextAuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </div>
    </NextAuthProvider>
  );
};

export default Layout;
