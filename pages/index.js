import Layout from "../components/Layout";
import { useSession } from "next-auth/react";
import React from "react";

const Home = () => {
  const { data: session } = useSession();
  if (!session) return;
  // console.log({ session });
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex bg-slate-300 gap-1 text-black rounded-lg overflow-hidden">
          <img src={session?.user?.image} alt="" className="h-6 w-6" />
          <span className="px-2">{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
