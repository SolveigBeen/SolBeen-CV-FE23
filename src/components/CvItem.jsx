// Component for presenting Competences for the CV.  User can select to show either 'Job Experience', 'Education' or 'Other' as competences.

import './CvItem.css'

const CvItem = ({ data }) => {

  return (
    <section className='CvItem__container'>
    {data.map((entry, index) => (
        <div key={index} className='CvItem' >
          <div className='CvItem__header'>
            <h3>{entry.title }</h3>
            <h4 className='CvItem__header-right'>{entry.year}</h4>
          </div>
          <p>{entry.description}</p>
        </div>
      ))}
    </section>
  )
}

export default CvItem