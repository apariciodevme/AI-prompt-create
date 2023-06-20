import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@components/Provider";

import Nav from "@components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "discover annd share AI prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="px-4"> 
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  );
}
