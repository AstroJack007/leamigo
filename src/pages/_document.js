import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/header";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased " style={{background: '#f5fffb'}}>
        <Header/>
        <div className="mt-10">
          <Main />
        </div>
        <NextScript  />
      </body>
    </Html>
  );
}
