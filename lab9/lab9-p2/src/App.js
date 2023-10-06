import { GitHubAvatar, GitHubRepoURL } from "./github_data.js";
import "./App.css"

const userInfo = {
alt : 'Supachai7676',
imgURL : 'https://avatars.githubusercontent.com/u/96044226?v=4',
url : 'https://github.com/Supachai7676'
}

export default function ShowGit(){
  return   (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200}/>
      <h3><GitHubRepoURL url={userInfo.url} /></h3>
    </div>
  )
}