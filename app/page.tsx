import CardJoinCreate from "@/components/CardJoinCreate";
import NavBar from "@/components/NavBar";

export default function Home() {
  return <div className="bg-zinc-800 h-screen">
    <NavBar/>
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">

    <CardJoinCreate />
    </div>
  </div>;
}
