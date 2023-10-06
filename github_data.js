export function GitHubAvatar({ imgURL, alt, size }) {
  return (
    <div>
      <img src={imgURL} alt={alt} width={size} />
    </div>
  );
}

export function GitHubRepoURL({ url }) {
    return (
        <p><a href = {url}> GitHub repository</a></p>
    )
}