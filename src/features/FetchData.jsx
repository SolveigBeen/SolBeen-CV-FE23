//To fetch selected Git Repo to list at the Project page.

import {useState, useEffect} from 'react'
import '../styles/projectPresenter.css'
import '../index.css'

const FetchData = () => {
const URL ="https:/api.github.com/users/SolveigBeen/repos";
const [data, setData] = useState([]);

// useEffect Hook for the data fetching. This ensures that the data fetching is only performed once when the component mounts, avoiding unnecessary re-fetching on subsequent re-renders.
useEffect(()=>{
fetch(URL)
.then((resp) => resp.json())
.then((data)=>{
  setData(data);
 console.log(data);
});
}, [])
const filteredData = data.filter((repo) => repo.description !== null);
// To select repon that I want to be visible on this page.

  return (
    <section >
      <h2> Mina projekt</h2>
      {filteredData.map((repo)=> (
        <article className='Project__item' key={repo.id}>
          <a href={repo.html_url}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </a>
        </article>
      ) 
      )}
    </section>
    
  )
}

export default FetchData