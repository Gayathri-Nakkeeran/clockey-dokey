import ProfileCard from "@/components/profile_infoCard";
import Navbar from "@/components/navbar";
import { getUserData } from "@/components/timerHelper";

const ShowProfile = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: {};
}) => {
  console.log(params.id, "id in page");
  const userData = await getUserData(params.id);
  return (
    <>
      <Navbar />
      <ProfileCard userData={userData} />
    </>
  );
};

export default ShowProfile;
