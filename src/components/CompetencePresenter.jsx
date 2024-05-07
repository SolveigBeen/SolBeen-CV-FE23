import  { useState } from 'react';
import CvItem from './CvItem';
import {jobExp, education, additional } from '../../public/competence-data'
import './CompetencePresenter.css'



const CompetencePresenter = () => {

  const [selectedComp, setSelectedComp] = useState('jobExp');

  const handleJobExpClick = () => {
    setSelectedComp('jobExp');
  };

  const handleEducationClick = () => {
    setSelectedComp('education');
  };

  const handleAnnatClick = () => {
    setSelectedComp('additional');
  };



  let selectedData;
  if (selectedComp === 'jobExp') {
    selectedData = jobExp;
  } else if (selectedComp === 'education') {
    selectedData = education;
  } else {
    selectedData = additional;
  }

  return (
    <div>
      <div className='Home__btn-container'>
          <button onClick={handleJobExpClick} className={selectedComp === 'jobExp' ? 'selected-button' : 'unselected-button'}
          >Job experience</button>
            <button onClick={handleEducationClick}      className={selectedComp === 'education' ? 'selected-button' : 'unselected-button'}
            >Education</button>
            <button onClick={handleAnnatClick}
            className={selectedComp === 'additional' ? 'selected-button' : 'unselected-button'}>Addtional</button>
          </div>
          <div className='CvItem'>
            <CvItem data={selectedData}></CvItem>
            
          </div>
          
     
     </div>
    
  )
}

export default CompetencePresenter