import React from "react";
import Progressbar from "./Progressbar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Cv from "./Cv";
import { useState } from "react";
const FormPages = () => {
  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      city: "",
      startingDate: "",
      endDate: "",
    },
  ]);
  const [file, setFile] = useState(null);
  const [education, setEducation] = useState([
    {
      university: "",
      city: "",
      degree: "",
      subject: "",
      startingDate: "",
      endDate: "",
    },
  ]);
  const [personal, setPersonal] = useState({
    firstName: "",
    lastName: "",
    title: "",
    adress: "",
    phoneNumber: "",
    email: "",
    description: "",
  });
  const [skills, setSkills] = useState([
    {
      skill: "",
      level: "",
    },
  ]);
  const increase = () => {
    if (step > 5) {
      setStep(5);
    } else {
      setStep(step + 1);
    }
  };
  const decrease = () => {
    if (step < 1) {
      setStep(1);
    } else {
      setStep(step - 1);
    }
  };
  if (step === 1) {
    return (
      <>
        <Progressbar step={step} />
        <Step1
          file={file}
          setFile={setFile}
          personal={personal}
          setPersonal={setPersonal}
          increase={increase}
        />
      </>
    );
  }
  if (step === 2) {
    return (
      <>
        <Progressbar step={step} />
        <Step2
          experience={experience}
          setExperience={setExperience}
          increase={increase}
          decrease={decrease}
        />
      </>
    );
  }
  if (step === 3) {
    return (
      <>
        <Progressbar step={step} />
        <Step3
          education={education}
          setEducation={setEducation}
          increase={increase}
          decrease={decrease}
        />
      </>
    );
  }
  if (step === 4) {
    return (
      <>
        <Progressbar step={step} />
        <Step4
          skills={skills}
          setSkills={setSkills}
          increase={increase}
          decrease={decrease}
        />
      </>
    );
  }
  if (step === 5) {
    return (
      <>
        <Progressbar step={step} />
        <Cv
          file={file}
          decrease={decrease}
          experience={experience}
          personal={personal}
          education={education}
          skills={skills}
        />
      </>
    );
  }
  return (
    <div className="text-center text-4xl font-semibold text-red-700">
      Error page
    </div>
  );
};

export default FormPages;
