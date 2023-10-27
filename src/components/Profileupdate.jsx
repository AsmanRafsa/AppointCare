import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import loaderImage from "../../src/assets/images/loader.gif";
import axios from "axios";

export default function Profileupdate() {
  const url = "http://127.0.0.1:8000/api/user/profile/";
  const imageUrl = "http://127.0.0.1:8000/api/";
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({});
  const [user, setUser] = useState({
    
  });

  useEffect(() => {
    axios
      .put(url)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  if (!user) {
    return <div>Loading user data...</div>;
  }
  console.log(user);



  async function handlePost(e) {
    e.preventDefault();
    const errors = {};
    (formData.file === undefined || formData.file === "") &&
      (errors.file = "Please Upload a file");
    (formData.hospitalName === undefined || formData.hospitalName === "") &&
      (errors.hospitalName = "Please enter the hospital name");
    (formData.hospitalLocation === undefined ||
      formData.hospitalLocation === "") &&
      (errors.hospitalLocation = "Please enter the hospital location");
    (formData.hospitalDetails === undefined ||
      formData.hospitalDetails === "") &&
      (errors.hospitalDetails = "Please Enter The Hospital's Details");
    (formData.slogan === undefined || formData.slogan === "") &&
      (errors.slogan = "Please Enter The Hospital's Slogan");
    (formData.workingHours === undefined || formData.workingHours === "") &&
      (errors.workingHours = "Please Enter The Working Hours");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);
  }

  return (
    <div>
      <Nav className="flex flex-1" />

      {user.map((Userprofile) => {
        return (
          <>
            <div className=" w-[] flex justify-center items-center">
              <h1 className="text-[4rem] font-bold text-blue-400">
                Update Your Profile
              </h1>
            </div>
            <div className="bg-[url('assets/images/signin.png')] bg-no-repeat bg-cover mx-auto container">
              <form
                action=""
                className="container mx-auto flex flex-col my-[3em] shadow-2xl justify-center items-center "
              >
                <div className="mt-[7em]">
                  <label className="my-[1em] font-medium text-[1.5rem] text-left">
                    Profile Picture
                  </label>
                  {formErrors.file && (
                    <p className="text-red-500">{formErrors.file}</p>
                  )}
                  <input
                    type="file"
                    name="file"
                    id=""
                    placeholder="Add An Image Of The Hospital"
                    className="text-left bg-red  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400 "
                  />
                </div>
                {loader ? (
                  formData.file && (
                    <img
                      src={`${imageUrl}${Userprofile.profilePic}`}
                      width={300}
                      className="my-[0.8em]"
                      height={300}
                    />
                  )
                ) : (
                  <img src={loaderImage} />
                )}
                <div>
                  <label className="my-[1em] font-medium text-[1.5rem] text-left">
                    First Name:
                  </label>
                  {formErrors.first_name && (
                    <p className="text-red-500">{formErrors.first_name}</p>
                  )}
                  <input
                    type="text"
                    placeholder="Enter Hospital's Slogan"
                    name="first_name"
                    className="text-left bg-red w-[30vw] p-4  border-2  border-gray-300 rounded-full flex outline-blue-500"
                    {...Userprofile.related_data.first_name}
                  />
                </div>
                <div className="my-[1em]">
                  <label className="my-[1em] font-medium text-[1.5rem] text-left">
                    Last Name:
                  </label>
                  {formErrors.last_name && (
                    <p className="text-red-500">{formErrors.last_name}</p>
                  )}
                  <input
                    type="text"
                    placeholder="Add The Name Of The Hospital"
                    name="last_name"
                    className="text-left bg-red w-[30vw] p-4  border-2  border-gray-300 rounded-full flex outline-blue-400"
                    {...Userprofile.related_data.last_name}
                  />
                </div>
                <div className="my-[1em]">
                  <label className="my-[1em] font-medium text-[1.5rem] text-left">
                    Username:
                  </label>
                  {formErrors.username && (
                    <p className="text-red-500">{formErrors.username}</p>
                  )}
                  <input
                    type="text"
                    name="username"
                    id=""
                    placeholder="Username"
                    className="text-left bg-red  p-4 w-[30vw] border-2  border-gray-300 rounded-full flex outline-blue-400"
                    {...Userprofile.related_data.username}
                  />
                </div>
                <div className="">
                  <div>
                    {formErrors.phone_number && (
                      <p className="text-red-500">{formErrors.phone_number}</p>
                    )}
                    <label className="my-[1em] font-medium text-[1.5rem] text-left">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter You Phone Number"
                      name="phone_number"
                      value={formData.phone_number}
                      className="text-left bg-red  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400"
                      {...Userprofile.phone_number}
                    />
                  </div>
                </div>
                <p className=" font-medium text-[1.5rem] text-left">Email:</p>

                <div>
                  {formErrors.email && (
                    <p className="text-red-500">{formErrors.email}</p>
                  )}
                  <input
                    type="email"
                    name=""
                    id=""
                    className="text-left bg-red  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400"
                  />
                </div>
                <button
                  onClick={(e) => handlePost(e)}
                  className="bg-[#3ba0f3] p-4 my-[1em] rounded-full text-white shadow font-medium"
                >
                  Update Profile
                </button>
              </form>
            </div>
          </>
        );
      })}

      <Footer className="flex flex-1" />
    </div>
  );
}
