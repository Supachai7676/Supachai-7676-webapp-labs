import { users } from './users.js';

export default function userInfo() {
    return (
      <div>
        <h1>Popular GitHub Repositories</h1>
        <ol>
          {users.map((user) => ( 
            <li>
              <div key={user.url}>
                <img src={user.imgURL} alt={user.alt} width="100" height="100" />
                <a href = {user.url}>{user.alt}{user.followers > 10000 && <>({user.followers} followers)</>}</a> 
      </div>
        </li>
        ))}
        </ol>
      </div>
    )
}