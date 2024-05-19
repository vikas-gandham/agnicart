import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full mx-auto ">
      <div className=" w-full mx-auto p-6  flex items-center justify-between ">
        <Link href="/">
          <img src="/logo.png" alt="" />{" "}
        </Link>
        <button className=" border px-4 py-2 bg-green-500 rounded-md text-white">
          Login
        </button>
      </div>
    </div>
  );
}
