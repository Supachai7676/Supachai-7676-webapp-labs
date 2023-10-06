import './App.css';
import {GitHubInfo} from './github_info.js';

export default function App(){
  const user = [
    {
      url: "http://github.com/Supachai7676",
      imgURL: "https://avatars.githubusercontent.com/u/96044226?s=400&u=81a865511ce73ffedfb256358472d0065e363d7c&v=4",
      alt: "Supachai7676",
    },
    {
      url: "https://github.com/facebook",
      imgURL: "https://avatars.githubusercontent.com/u/69631?v=4",
      alt: "facebook",
    },
    {
      url: "https://github.com/vercel/next.js",
      imgURL: "https://avatars.githubusercontent.com/u/14985020?s=200&v=4",
      alt: "next.js"
    }
  ];

  return (
    <div className="App">
      <GitHubInfo userInfo={user[0]}/>
      <GitHubInfo userInfo={user[1]}/>
      <GitHubInfo userInfo={user[2]}/>
    </div>
  )
}
