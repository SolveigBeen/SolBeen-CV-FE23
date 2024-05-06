// Component for presenting Competences for the CV.  User can select to show either 'Job Experience', 'Education' or 'Other' as competences.

const CvItem = ({ data }) => {

  return (
    <section className='CvItem__container'>
    {data.map((entry, index) => (
        <div key={index} className='CvItem' >
          <div className='CvItem__header'>
            <h3>{entry.company || entry.school}</h3>
            <h3>{entry.year}</h3>
          </div>
          <p>{entry.description}</p>
        </div>
      ))}
    </section>
  )
}

export default CvItem