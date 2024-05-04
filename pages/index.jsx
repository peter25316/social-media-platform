import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-3xl text-sky-500">
      <h1>Hello world</h1>
    </div>
  );
}
