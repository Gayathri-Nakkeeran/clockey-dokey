import Link from "next/link";
const SubmitButton = ({ idProps }: any) => {
  return (
    <div className="mt-32 ml-48 md:ml-64">
      <Link
        href={`../ProfilePage/${idProps}`}
        className="text-2xl text-slate-300 border p-4 rounded-md hover:bg-purple-800 "
      >
        Submit
      </Link>
    </div>
  );
};

export default SubmitButton;
