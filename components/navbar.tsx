import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex text-lg p-3 border border-1 rounded-xl border-purple-900 place-content-center md:place-content-end text-white tracking-wider sticky top-0 bg-gradient-to-r from-orange-900 via-purple-900 to-purple-900">
      <Link
        className="p-3 px-6 text-2xl font-semibold hover:bg-purple-500 hover:rounded-md "
        href="../"
      >
        Home
      </Link>
      <Link
        className="p-3 px-6 text-2xl font-semibold hover:bg-purple-500 hover:rounded-md"
        href="../UserIdInputPage"
      >
        View Profile
      </Link>
    </div>
  );
};
export default Navbar;
