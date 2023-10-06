import { GitHubAvatar, GitHubRepoURL } from "./github_data.ja";
import ".App.css"

return   (
  <div className="App">
    <h1>{userInfo.alt}</h1>
    <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200}/>
    <GitHubRepoURL url={userInfo.url} />
  </div>
)