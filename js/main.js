const taboolaApi = 'http://api.taboola.com',
    protocolVersion = '1.1',
    format = 'json',
    publisherId = 'taboola-templates',
    methodName = 'recommendations.get',
    appType = 'desktop',
    appkey = 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4',
    ResCount = '10',
    sourceTyp = 'video',
    sourceId = 'demo',
    userSession = 'init',
    sourceUrl = 'http://test.com';

let restApiUrl = `${taboolaApi}/${protocolVersion}/${format}/${publisherId}/${methodName};`;
const params = `?app.type=${appType}&app.apikey=${appkey}&rec.count=${ResCount}&source.type=${sourceTyp}&source.id=${sourceId}&user.session=${userSession}&source.url=${sourceUrl}`;

// Async/Await requirements: Latest Chrome/FF browser or Babel: https://babeljs.io/docs/plugins/transform-async-to-generator/
// Fetch requirements: Latest Chrome/FF browser or Github fetch polyfill: https://github.com/github/fetch

// async function
async function fetchAsync () {
    // await response of fetch call
    let response = await fetch(restApiUrl + params);
    // only proceed once promise is resolved
    let data = await response.json();
    // only proceed once second promise is resolved
    return data;
}

// trigger async function
// log response or catch error of fetch promise
fetchAsync()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message));