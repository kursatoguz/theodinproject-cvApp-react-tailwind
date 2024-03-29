import React from "react";
import userImage from "../userImage.jpg";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
const Cv = ({ decrease, experience, personal, education, skills, file }) => {
  const printDocument = () => {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0, 200, 200);
      pdf.save(`${personal.firstName.replace(/\s/g, "")}CV.pdf`);
    });
  };
  return (
    <div className=" bg-gray-500 font-sans h-screen">
      <div
        id="divToPrint"
        className="flex flex-row mx-auto p-12 justify-center"
      >
        {/* Left side */}
        <div className="w-3/12 bg-sky-700  flex flex-col text-white shadow-lg">
          <img
            src={file ? URL.createObjectURL(file) : userImage}
            alt="userImage"
            className="object-cover h-80 w-96 shadow-md"
          />
          <div className="p-4">
            <h2 className=" font-bold uppercase text-xl">
              {personal.firstName} {personal.lastName}
            </h2>
            <p className=" text-lg opacity-80 capitalize">{personal.title}</p>
          </div>
          <div className="p-4 opacity-90 ">
            <p className="flex flex-wrap items-center ">
              <MdOutlineMapsHomeWork className="pr-1 text-2xl" />
              {personal.adress}
            </p>
            <p className="flex flex-wrap items-center ">
              <AiOutlinePhone className="pr-1 text-2xl" />
              {personal.phoneNumber}
            </p>
            <p className="flex flex-wrap items-center ">
              <AiOutlineMail className="pr-1 text-2xl" />
              {personal.email}
            </p>
          </div>
          <div className="m-4 h-0.5 bg-white shadow-md"> </div>
          <div className="p-4 opacity-90">
            {skills.map((skill, index) => {
              return (
                <p key={index}>
                  <span className="uppercase">{skill.skill}</span> -{" "}
                  {skill.level}
                </p>
              );
            })}
          </div>
        </div>
        {/* Right Side */}
        <div className="w-6/12 bg-white  px-8 py-10 text-dark">
          <div>
            <h1 className="font-extrabold uppercase text-xl text-sky-700">
              Description
            </h1>
            <p className="pt-2">{personal.description}</p>
          </div>
          <div className="my-5 h-0.5 bg-gray-300 shadow-md"> </div>
          <div>
            <h1 className="font-extrabold uppercase text-xl text-sky-700">
              Education
            </h1>
            <div className="ml-4 mt-2 pb-2 ">
              {education.map((item, index) => {
                return (
                  <div
                    className="mt-2 border-l-2 border-sky-600 pl-2 shadow-md"
                    key={index}
                  >
                    <div className="text-lg">
                      {item.startingDate ? `${item.startingDate} -` : ""}{" "}
                      {item.endDate}
                    </div>
                    <div className="text-lg mt-1">
                      {item.subject ? `${item.subject} -` : ""} {item.degree}
                    </div>
                    <div>
                      {item.university ? `${item.university} -` : ""}{" "}
                      {item.city}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-5 h-0.5 bg-gray-300 shadow-lg"> </div>
          <div className="mt-2">
            <h1 className="font-extrabold uppercase text-xl text-sky-700">
              Experience
            </h1>
            <div className="ml-4 mt-2 pb-2 ">
              {experience.map((item, index) => {
                return (
                  <div className="mt-2 border-l-2 border-sky-600 pl-2 shadow-md">
                    <div className="text-lg">
                      {item.startingDate ? `${item.startingDate} -` : ""}{" "}
                      {item.endDate}
                    </div>
                    <div className="text-lg mt-1">
                      {item.company ? `${item.company} /` : ""} {item.city}
                    </div>
                    <div>{item.position}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <button
        className="fixed bottom-4 left-8 border-0 rounded-md bg-blue-800 text-white p-2 w-28 m-2"
        type="button"
        onClick={decrease}
      >
        Back
      </button>
      <button
        className="fixed bottom-4 right-8 border-0 rounded-md bg-red-600 text-white p-2 w-28 m-2"
        type="button"
        onClick={printDocument}
      >
        Download
      </button>
    </div>
  );
};

export default Cv;
