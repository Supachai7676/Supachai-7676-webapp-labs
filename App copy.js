import { people } from './data-q1.js';
import { getImageUrl } from './utils-q1.js';

export default function List() {
  const chemists = people.filter(person => people.profession === 'chemist');
  const everyoneElse = people.filter(person => people.profession !== 'chemist');
  
    <li key={person.id}>  
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>

  return (
    <article>
      <h1>Scientists</h1>
      <h1>Chemists</h1>
      <ul>{chemists}</ul>
      <h1>Everyone else</h1>
      <ul>{everyoneElse}</ul>
    </article>
  );
}
