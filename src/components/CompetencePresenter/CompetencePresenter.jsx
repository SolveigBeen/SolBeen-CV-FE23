//This component presents Competences within 3 categories, Job experience, Education and Additional. All competence data are stored in an object that are stored in a separate file.
//Competence category can be selected with buttons, and the actual category is handled by UseState.
//The competence data is populated in a separate component, CvItem.

import { useState } from "react";
import CvItem from "./CvItem";
import { jobExp, education, additional } from "../../../public/competence-data";
import "./CompetencePresenter.css";
import ButtonGeneral from "../ButtonGeneral/ButtonGeneral";

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
        <ButtonGeneral onClick={handleJobExpClick}
          className={
            selectedComp === "jobExp" ? "selected-button" : "unselected-button"
          }  title='Job experience' >

          </ButtonGeneral>

       <ButtonGeneral onClick={handleEducationClick}
          className={
            selectedComp === "education"
              ? "selected-button"
              : "unselected-button"
          } title='Education'></ButtonGeneral>

          <ButtonGeneral onClick={handleAnnatClick}
          className={
            selectedComp === "additional"
              ? "selected-button"
              : "unselected-button"
          } title='Additional'></ButtonGeneral>
      
      
      </div>
      <div>
        <CvItem data={selectedData}></CvItem>
      </div>
    </div>
  );
};

export default CompetencePresenter;
