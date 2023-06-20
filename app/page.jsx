import Feed from "@components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-4 ">
      <h1 className="text-center head_text">
        Discover And Share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> AI-Powered Prompts</span>
      </h1>
      <p className="text-center desc">
        Open source AI Promptinng tool ro create and share creative artificial
        intelligence based prompts.
      </p>

      {/* feed*/}
      <Feed/>
    </main>
  );
}
