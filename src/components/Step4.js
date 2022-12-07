import React from "react";

const Step4 = ({ skills, setSkills, increase, decrease }) => {
  const handleChange = (i, e) => {
    let tempExp = [...skills];
    tempExp[i][e.target.name] = e.target.value;
    setSkills(tempExp);
  };
  const addFormFields = () => {
    setSkills([
      ...skills,
      {
        company: "",
        position: "",
        city: "",
        startingDate: "",
        endDate: "",
      },
    ]);
  };
  const removeFormFields = (i) => {
    let newExp = [...skills];
    newExp.splice(i, 1);
    setSkills(newExp);
  };
  return (
    <form className=" relative w-6/12 md:w-8/12 sm:min-sm: w-11/12 mx-auto flex flex-col justify-content:center align-items:center m-6 font-mono ">
      <h4 className="text-2xl font-medium text-center ">Skills</h4>
      <div className="bg-yellow-400 h-px mt-2 w-40 mx-auto shadow-md"></div>
      {skills.map((element, index) => {
        return (
          <div key={index}>
            <label htmlFor="skill" className="my-1 text-base">
              Skill
            </label>
            <input
              value={element.skill}
              onChange={(e) => handleChange(index, e)}
              type="text"
              name="skill"
              placeholder={`Skill ${index + 1}`}
              className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
            />
            <label htmlFor="level" className="my-1 text-base">
              Level
            </label>
            <input
              value={element.level}
              onChange={(e) => handleChange(index, e)}
              type="text"
              name="level"
              placeholder="beginner, intermediate, pro..."
              className="w-full border hover:border-2 rounded-md border-neutral-300 px-1 py-2 outline-blue-600 focus:border-0"
            />

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

export default Step4;
