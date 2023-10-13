import { useState } from 'react';
import { users } from './users.js';

export default function User() {
  const [index, setIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);

  const nextClick = () => {
    if (index < users.length) {
      setIndex(index + 1);
    }
  }

  const previousClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  const toggleFollowers = () => {
    setShowFollowers(!showFollowers);
  }

  let userList = users[index];
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Sample GitHub Repositories</h1>
        <h2><a href={userList.url}><b>{userList.alt}</b></a></h2>
        <div>
          <img src={userList.imgURL} alt={userList.alt} height="300" width="300" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={toggleFollowers} style={{ backgroundColor: 'lightblue', margin: '20px' }}>
            {showFollowers ? 'Hide Followers' : 'Show Followers'}
          </button>
          {showFollowers && (
            <p style={{ marginLeft: '10px' }}>
              {`${userList.followers}`}
            </p>
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={previousClick} disabled={index === 0} style={{ backgroundColor: 'greenyellow', margin: '20px' }}>Previous</button>
        <button onClick={nextClick} disabled={index === users.length - 1} style={{ backgroundColor: 'orange', margin: '20px' }}>Next</button>
      </div>
    </>
  )
}
