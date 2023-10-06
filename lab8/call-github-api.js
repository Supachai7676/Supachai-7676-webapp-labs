<<<<<<< HEAD
import axios from 'axios';
axios.get('https://api.github.com/users/Supachai7676').then(resp => {
    let results = resp.data
    let name = results.name
    let location = results.location
    console.log(`GitHub user name is ${name} who lives in ${location}`); 
=======
import axios from 'axios';
axios.get('https://api.github.com/users/Supachai7676').then(resp => {
    let results = resp.data
    let name = results.name
    let location = results.location
    console.log(`GitHub user name is ${name} who lives in ${location}`); 
>>>>>>> 7609c1bad7b74476eeb19d38fda255d833d675d4
});