import React from "react";

const Step3 = ({ education, setEducation, increase, decrease }) => {
  const handleChange = (i, e) => {
    let tempExp = [...education];
    tempExp[i][e.target.name] = e.target.value;
    setEducation(tempExp);
  };
  console.log(education);
  const addFormFields = () => {
    setEducation([
      ...education,
      {
        university: "",
        degree: "",
        subject: "",
        city: "",
        startingDate: "",
        endDate: "",
      },
    ]);
  };
  const removeFormFields = (i) => {
    let newExp = [...education];
    newExp.splice(i, 1);
    setEducation(newExp);
  };
  return (
    <form className=" relative w-6/12 mx-auto flex flex-col justify-content:center align-items:center m-6 font-mono ">
      <h4 className="text-2xl font-medium text-center ">Education</h4>
      <div className="bg-green-700 h-px mt-2 w-40 mx-auto shadow-md"></div>
      {education.map((element, index) => {
        return (
          <div key={index}>
            <label htmlFor="university" className="my-1 text-base">
              School Name
            </label>
            <input
              value={element.university}
              onChange={(e) => handleChange(index, e)}
              type="text"
              name="university"
              placeholder="University Name"
              className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
            />
            <label htmlFor="city" className="my-1 text-base">
              City
            </label>
            <input
              value={element.city}
              onChange={(e) => handleChange(index, e)}
              type="text"
              name="city"
              placeholder="City"
              className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
            />
            <label htmlFor="degree" className="my-1 text-base">
              Degree
            </label>
            <input
              name="degree"
              value={element.degree}
              onChange={(e) => handleChange(index, e)}
              type="text"
              placeholder="Degree"
              className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
            />
            <label htmlFor="subject" className="my-1 text-base">
              Subject
            </label>
            <input
              name="subject"
              value={element.subject}
              onChange={(e) => handleChange(index, e)}
              type="text"
              placeholder="Subject"
              className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
            />
            <div className="flex flex-row align-middle mt-2">
              <input
                value={element.startingDate}
                onChange={(e) => handleChange(index, e)}
                type="year"
                name="startingDate"
                className="w-28 border border-neutral-300 rounded-md py-1"
              />
              <span className="px-4 py-1">to</span>
              <input
                value={element.endDate}
                onChange={(e) => handleChange(index, e)}
                type="year"
                name="endDate"
                className="w-28 border border-neutral-300 rounded-md py-1"
              />
            </div>
            {index ? (
              <button
                type="button"
                className="w-full border-0 px-1 py-2 rounded-md mt-2 bg-slate-700 text-white"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
        );
      })}

      <button
        type="button"
        className="w-full border-0 px-1 py-2 rounded-md mt-2 bg-slate-700 text-white"
        onClick={addFormFields}
      >
        Add
      </button>
      <div className="flex flex-row justify-between">
        <button
          className="float-right border-0 rounded-md bg-blue-800 text-white p-2 w-24 mt-2"
          type="button"
          onClick={decrease}
        >
          Back
        </button>
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

export default Step3;
