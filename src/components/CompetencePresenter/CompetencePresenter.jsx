import { useState } from "react";
import CvItem from "./CvItem";
import { jobExp, education, additional } from "../../../public/competence-data";
import "./CompetencePresenter.css";

const CompetencePresenter = () => {
  const [selectedComp, setSelectedComp] = useState("jobExp");

  //Events from the 3 buttons:
  const handleJobExpClick = () => {
    setSelectedComp("jobExp");
  };

  const handleEducationClick = () => {
    setSelectedComp("education");
  };

  const handleAnnatClick = () => {
    setSelectedComp("additional");
  };

  //Depending on selected button, fetch the selected data from the separate competence-data.js file
  let selectedData;
  if (selectedComp === "jobExp") {
    selectedData = jobExp;
  } else if (selectedComp === "education") {
    selectedData = education;
  } else {
    selectedData = additional;
  }

  return (
    <div>
      <div className="Home__btn-container">
        <button
          onClick={handleJobExpClick}
          className={
            selectedComp === "jobExp" ? "Home__selected-button" : "Home__unselected-button"
          }>
          Job experience
        </button>
        <button
          onClick={handleEducationClick}
          className={
            selectedComp === "education"
              ? "Home__selected-button"
              : "Home__unselected-button"
          }>
          Education
        </button>
        <button
          onClick={handleAnnatClick}
          className={
            selectedComp === "additional"
              ? "Home__selected-button"
              : "Home__unselected-button"
          }>
          Addtional
        </button>
      </div>
      <div>
        <CvItem data={selectedData}></CvItem>
      </div>
    </div>
  );
};

export default CompetencePresenter;
