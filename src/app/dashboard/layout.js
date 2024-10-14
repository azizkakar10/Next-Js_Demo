import Link from "next/link";

export default function DashboardLayout({children}){
    return ( <section className="min-h-screen flex">
        <div className="w-1/4 bg-gray-200 border-r-4 border-r-gray-400">
            <Link className="block p-2 text-center hover:bg-white" href={"/dashboard/setting"}>Setting</Link>
            <Link className="p-2 block text-center hover:bg-white" href={"/dashboard/profile"}>Profile</Link>
        </div>
        <div className="w-3/4">{children}</div>
        </section>
    );
  }