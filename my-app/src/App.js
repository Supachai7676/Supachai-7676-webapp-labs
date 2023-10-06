import { GitHubAvatar, GitHubRepoURL } from "./github_data.js";
import ".App.css"

export default function ShowGit() {
return   (
  <div className="App">
    <h1>{userInfo.alt}</h1>
    <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200}/>
    <GitHubRepoURL url={userInfo.url} />
  </div>
)}