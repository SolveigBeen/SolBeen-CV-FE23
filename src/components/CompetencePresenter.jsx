import  { useState } from 'react';
import CvItem from './CvItem';



const CompetencePresenter = () => {

  const [selectedComp, setSelectedComp] = useState('jobExp');

  const handleJobExpClick = () => {
    setSelectedComp('jobExp');
  };

  const handleEducationClick = () => {
    setSelectedComp('education');
  };

  const handleAnnatClick = () => {
    setSelectedComp('annat');
  };

  const jobExp = [{
    company : 'Ericsson',
    year: '2008-2023',
    description: 'GUI development of CoordCom, , a critical system used by SOS for emergency alarm management and resource allocation https://www.youtube.com/watch?v=AhPzJx1Ps04., a critical system used by SOS for emergency alarm management and resource allocation https://www.youtube.com/watch?v=AhPzJx1Ps04. '
  },
  {
    company : 'Volvo',
    year: '1995-2008',
    description: 'Started as Product Ergonomist developing Driver’s environment, main focus was seating comfort.  continued then with the driver’s User interfaces within the Human Machine Interface area.'
  },
  
  ];
  
  const education = [{
    school : 'Luleå Tekniska Universitet',
    year: '2008-2023',
    description: 'Lrem ipsum'
  },
  {
    school : 'Umeå Universitet',
    year: '1995-2008',
    description: 'Lrem ipsum'
  }
  ];
  const annat = [{
    school : 'sdföslj öljföjlf',
    year: '2008-2023',
    description: 'Lrem ipsum'
  },
  {
    school : 'sdf sdfsd sdf ',
    year: '1995-2008',
    description: 'Lrem ipsum'
  },
  {
    school : 'sdföslj öljföjlf',
    year: '2008-2023',
    description: 'Lrem ipsum'
  }
  ];

  let selectedData;
  if (selectedComp === 'jobExp') {
    selectedData = jobExp;
  } else if (selectedComp === 'education') {
    selectedData = education;
  } else {
    selectedData = annat;
  }

  return (
    <div>
      <div className='Home__btn-container'>
          <button onClick={handleJobExpClick} className={selectedComp === 'jobExp' ? 'selected-button' : 'unselected-button'}
          >Job experience</button>
            <button onClick={handleEducationClick}      className={selectedComp === 'education' ? 'selected-button' : 'unselected-button'}
            >Education</button>
            <button onClick={handleAnnatClick}
            className={selectedComp === 'annat' ? 'selected-button' : 'unselected-button'}>Addtional</button>
          </div>
          <div className='CvItem'>
            <CvItem data={selectedData}></CvItem>
            <p>sldkfldskj</p>
          </div>
          
     
     </div>
    
  )
}

export default CompetencePresenter