import { users } from './users.js';

const popularUsers = users.filter((user) => user.followers > 10000);

export default function userInfo() {
    return (
      <div>
        <h1>Popular GitHub Repositories</h1>
        <ol>
        {popularUsers.map((user) => ( 
        <li>
          <div key={user.url}>
            <img src={user.imgURL} alt={user.alt} width="100" height="100" />
            <a href = {user.url}>{user.alt} </a> 
            ({user.followers} followers)
          </div>
        </li>
        ))}
        </ol>
      </div>
    )
}