import './App.css';
export function GitHubAvatar() {
  return(
    <img src = "https://avatars.githubusercontent.com/u/96044226?v=4" alt = "My Avatar"></img>
  )
}

export function GitHubRepo() {
  return(
    <h3><a href = "https://github.com/Supachai7676">My GitHub Repository</a></h3>
  )
}

export default function ShowGit() {
  return(
    <section>
      <h1>My GitHub Information</h1>
      <GitHubAvatar /> <br />
      <GitHubRepo />
    </section>
  );
}