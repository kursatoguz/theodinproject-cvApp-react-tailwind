import React, { useState } from "react";
const Step1 = ({ increase, personal, setPersonal, setFile }) => {
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonal({ ...personal, [name]: value });
  };
  const handleUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setFile(img);
      setShowMessage(true);
    }
  };
  return (
    <form className=" relative w-6/12 md:w-8/12 sm:min-sm: w-11/12 mx-auto flex flex-col justify-content:center align-items:center m-6  font-mono ">
      <h4 className="text-2xl font-medium text-center ">
        Personal Informations
      </h4>
      <div className="bg-yellow-400 h-px mt-2 w-40 mx-auto shadow-md"></div>
      <label htmlFor="firstname" className="my-1 text-base">
        First Name
      </label>
      <input
        value={personal.firstName}
        onChange={(e) => handleChange(e)}
        name="firstName"
        type="text"
        placeholder="First Name"
        className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
      />
      <label htmlFor="lastname" className="my-1 text-base">
        Last Name
      </label>
      <input
        value={personal.lastName}
        onChange={(e) => handleChange(e)}
        name="lastName"
        type="text"
        placeholder="Last Name"
        className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
      />
      <label htmlFor="firstname" className="my-1 text-base">
        Title
      </label>
      <input
        value={personal.title}
        onChange={(e) => handleChange(e)}
        name="title"
        type="text"
        placeholder="Title"
        className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
      />
      <label
        for="file-upload"
        class="w-full bg-white border cursor-pointer pl-1 py-2 mt-2 rounded-md uppercase tracking-wider font-semibold"
      >
        Add Photo{" "}
        <span
          className=" lowercase text-sm "
          style={{ color: showMessage ? "green" : "red" }}
        >
          {showMessage ? "File Uploaded" : "No File Selected"}
        </span>
      </label>
      <input
        id="file-upload"
        type="file"
        name="userImage"
        onChange={(e) => handleUpload(e)}
        className="hidden"
        title="Add Photo"
      />

      <label htmlFor="adress" className="my-1 text-base">
        Adress
      </label>
      <input
        value={personal.adress}
        onChange={(e) => handleChange(e)}
        name="adress"
        type="text"
        placeholder="Adress"
        className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
      />
      <label htmlFor="phonenumbmer" className="my-1 text-base">
        Phone Number
      </label>
      <input
        value={personal.phoneNumber}
        onChange={(e) => handleChange(e)}
        name="phoneNumber"
        type="text"
        placeholder="Phone Number"
        className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
      />
      <label htmlFor="email" className="my-1 text-base">
        Email
      </label>
      <input
        value={personal.email}
        onChange={(e) => handleChange(e)}
        name="email"
        type="text"
        placeholder="Email"
        className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
      />
      <label htmlFor="description" className="my-1 text-base">
        Description
      </label>
      <textarea
        value={personal.description}
        onChange={(e) => handleChange(e)}
        name="description"
        placeholder="Description"
        cols="10"
        rows="5"
        className="h-10 border border-neutral-300 rounded-md pl-1 pt-1"
      ></textarea>
      <div className="full">
        <button
          className="float-right border-0 rounded-md bg-blue-800 text-white p-2 w-24 mt-2"
          type="button"
          onClick={increase}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Step1;
