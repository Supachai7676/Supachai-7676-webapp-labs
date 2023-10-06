import {useState} from 'react';
import {users} from './users.js';

export default function User() {
  const [index, setIndex] = useState(0);

  const nextClick = ()=> {
    if (index < users.length) {
    setIndex(index + 1);
  }
}

  const previousClick = () => {
    if (index > 0) {
    setIndex(index - 1);
    }
  }

  let userList = users[index];
  return (   
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1>Sample GitHub Repositories</h1>

    <div>
    <a href={userList.url}><b>{userList.alt}</b></a>
    </div>
    <div>
    <img src={userList.imgURL} alt={userList.alt} height = "300" width = "300"/>
    </div>
    <div>
    <p>{userList.followers} followers</p> 
    </div>
    </div>

    <div style={{display: 'flex', justifyContent: 'space-between'}}>      
      <button onClick={previousClick } disabled = {index === 0} style={{backgroundColor: 'greenyellow'}}>Previous</button>
      <button onClick={nextClick} disabled={index === users.length-1} style={{backgroundColor: 'orange'}}>Next</button>
    </div>
    </>
  )
}