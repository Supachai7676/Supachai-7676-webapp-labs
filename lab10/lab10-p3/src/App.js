import { useState, useEffect } from 'react';
import axios from 'axios';
import { users } from './users.js';

export default function User() {
  const [index, setIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      if (index >= 0 && index < users.length) {
        const username = users[index];
          const response = await axios.get(`https://api.github.com/users/${username}`);
          setUserData(response.data);
      }
    };

    fetchUserData();
  }, [index]);

  const nextClick = () => {
    if (index < users.length - 1) {
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

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {userData && (
          <>
            <h1>GitHub User: {userData.login}</h1>
            <h2><a href={userData.html_url}><b>{userData.name}</b></a></h2>
            <div>
              <img src={userData.avatar_url} alt={userData.name} height="300" width="300" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <button onClick={toggleFollowers} style={{ backgroundColor: 'lightblue', margin: '20px' }}>
                {showFollowers ? 'Hide Followers' : 'Show Followers'}
              </button>
              {showFollowers && (
                <p style={{ marginLeft: '10px' }}>
                  Followers: {userData.followers}
                </p>
              )}
            </div>
          </>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={previousClick} disabled={index === 0} style={{ backgroundColor: 'greenyellow', margin: '20px' }}>Previous</button>
        <button onClick={nextClick} disabled={index === users.length - 1} style={{ backgroundColor: 'orange', margin: '20px' }}>Next</button>
      </div>
    </>
  )
}
