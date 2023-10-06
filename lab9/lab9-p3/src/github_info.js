export function GitHubInfo({userInfo}) {
  const {url, imgURL, alt} = userInfo;

  return (
    <div>
      <h1>{alt}</h1>
      <img src={imgURL} alt={alt} width= '60' height= '60' />
      <h2>
        <a href= {url}> GitHub Repository.</a> 
      </h2>

    </div>
  )
}