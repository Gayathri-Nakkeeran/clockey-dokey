import ProfileCard from "@/components/profile_infoCard";
import Navbar from "@/components/navbar";
const ShowProfile = async ({ params }: any) => {
  let dataForDisplay;
  let idValue = params.id;

  // function getData() {

  //   return new Promise((resolve, reject) => {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${idValue}`)
  //       .then((response) => {
  //
  //         return response.json();
  //       })
  //       .then((data_from_fetched) => {
  //
  //         let data = data_from_fetched;
  //         resolve(data);
  //       });
  //   });
  // }

  // getData().then((data) => {
  //
  //   dataForDisplay = data;
  //
  // });

  // console.log(dataForDisplay, "dataggjkh");
  // const userData = fetch(
  //   `https://jsonplaceholder.typicode.com/users/${idValue}`
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     // console.log("data from server", data);
  //     dataForDisplay = data;
  //     return data;
  //     // console.log(dataForDisplay, "datafordisplsyyy");
  //   });
  // console.log(userData, dataForDisplay, "userdataaa");

  return (
    <>
      <Navbar />
      <ProfileCard id={params.id} />
    </>
  );
};

export default ShowProfile;
