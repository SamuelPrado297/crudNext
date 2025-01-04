import Page from "./components/templates/page";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col justify-center items-center p-48">
        <p className="flex p-2 gap-4 items-center text-2xl">CRUD com Next.js</p>
        <button className="bg-green-500 px-4 py-2 rounded-md"><Link href="/internal/users">Acessar</Link></button>
      </div>
    </Page>
  );
}
