import Taboola from './Taboola';
import Style from './style';

new Style();
const taboola = new Taboola();

// trigger async function
// log response or catch error of fetch promise
taboola.fetchAsync()
    .then(data => taboola.Create(data)) // success
    .catch(reason => console.log(reason.message)); // error





