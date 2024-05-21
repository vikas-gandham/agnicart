import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full mx-auto fixed top-0 left-0 right-0 border-b z-20 bg-white ">
      <div className="flex items-center justify-between p-10  ">
        <div className="flex items-center justify-center gap-12">
          <Link href="/">
            <img src="/logo.png" alt="" />
          </Link>

          <div className="flex items-center justify-center gap-8">
            <Link href="/">Features</Link>
            <Link href="/">Pricing</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Customers</Link>
            <Link href="/">Tutorials</Link>
            <Link href="/">Partners</Link>
          </div>
        </div>

        <button className=" border px-4 py-2 bg-green-500 rounded-md text-white">
          Login
        </button>
      </div>
    </div>
  );
}
