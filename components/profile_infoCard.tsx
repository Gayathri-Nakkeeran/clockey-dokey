const ProfileCard = ({ userData }: { userData: any }) => {
  console.log("data from profile page", userData);

  return (
    <div className=" mx-auto border shadow-md shadow-yellow-600  rounded-xl text-justify  text-white text-3xl mt-32 md:w-3/4 lg:w-6/12 ">
      <div className="m-4 p-4  ">
        <span className="m-4 p-4 font-semibold ">Name :</span>
        <span>{userData?.name}</span>
      </div>
      <div className="m-4 p-4 ">
        <span className="m-4 p-4 font-semibold">Phone :</span>
        <span>{userData?.phone}</span>
      </div>
      <div className="m-4 p-4 ">
        <span className="m-4 p-4 font-semibold">UserName :</span>
        <span>{userData?.username}</span>
      </div>
      <div className="m-4 p-4 ">
        <span className="m-4 p-4 font-semibold">Email :</span>
        <span>{userData?.email}</span>
      </div>
      <div className="m-4 p-4 ">
        <span className="m-4 p-4 font-semibold">City :</span>
        <span>{userData?.address?.city}</span>
      </div>
      <div className="m-4 p-4 ">
        <span className="m-4 p-4 font-semibold">Zipcode :</span>
        <span>{userData?.address?.zipcode}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
