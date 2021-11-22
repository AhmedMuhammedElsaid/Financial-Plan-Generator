import React, { useState } from "react";
import { Button, Toast, ToastBody } from "reactstrap";
import SectionOne from "../../components/SectionOne";
import SectionTwo from "../../components/SectionTwo";
import { questions } from "../utils/dummyQuestions";

const Questionnaire = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClosetModal = () => setIsModalOpen(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const initialValues = {
    "sec1-q1": "",
    "sec1-q2": "",
    "sec1-q3": "",
    "sec2-q1": "",
    "sec2-q2": "",
  };
  const [result, setResult] = useState(initialValues);
  const handleChange = (key: string, value: string | number | object) =>
    setResult({ ...result, [key]: value });

  const sections = [
    {
      component: (
        <SectionOne
          changeHandler={handleChange}
          values={result}
          questions={questions.section1}
        />
      ),
    },
    {
      component: (
        <SectionTwo
          changeHandler={handleChange}
          values={result}
          questions={questions.section2}
        />
      ),
    },
  ];
  const isLastStep = activeSection === 1;
  const handleSubmit = async () => {
    // validation step, in case the user doesn't have an investment , we make sure that the investment amount field is zero
    if (result?.["sec2-q1"] === "no") result["sec2-q2"] = "0";
    // mock api call to post data
    const response = await fetch("dummyURI", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result),
    });
    setTimeout(() => {
      handleOpenModal();
    }, 500);
  };
  const handleGenerateAgain = () => {
    handleClosetModal();
    setActiveSection(0);
    setResult(initialValues);
  };
  const handleClick = () => (isLastStep ? handleSubmit() : setActiveSection(1));
  return (
    <>
      <div className="d-flex align-items-center justify-content-center mb-2">
        <Toast isOpen={isModalOpen} onClick={handleClosetModal}>
          <ToastBody className="text-muted text-dark fs-5 text-capitalize text-center">
            {" "}
            your answers are submitted successfully
          </ToastBody>
        </Toast>
      </div>
      {sections[activeSection].component}
      <div className=" d-flex justify-content-center">
        <Button color="warning" size="md" onClick={handleClick}>
          {isLastStep ? "Submit" : "Next"}
        </Button>
        {activeSection === 1 && (
          <Button
            size="md"
            color="primary"
            className="mx-3  "
            onClick={handleGenerateAgain}
          >
            Again
          </Button>
        )}
      </div>
    </>
  );
};

export default Questionnaire;
