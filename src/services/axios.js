import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const instance = axios.create({
    baseURL: BASE_URL,

    // Lets keep a check as default is 0 millisecond i.e. never 
    // Note: timeout is only for server response not network i.e. server reachability
    timeout: 100000,

    // Lets keep a check as default bytes- 2k
    maxContentLength: 1000,

    // Lets keep a check as default 5 seems high
    maxRedirects: 2,

})

instance.interceptors.request.use((req) => {
    //console.log(`${JSON.stringify(req, null, 2)}`);
    return req;
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    // Rate limiting: only fire a request every 2 sec from lodash.debounce
    //return new Promise((resolve) => { debounce( () => resolve(config),2000); });
    return Promise.resolve(config);
}, function (error) {
    handleLogError(error); // log them
    return Promise.reject(error);
}
    // multiple options as to when and how to apply these interceptors
    // , { synchronous: true, runWhen: onGetCall } 
);

instance.interceptors.response.use(response => {
    return response; // handling 2xx - you dont want to log this on console!!!
}, function (error) { // !2xx
    handleLogError(error); // log them
    return Promise.reject(error.response);
});

// free up the calling methods as reusable code
const handleLogError = (error) => {
    if (error.response) { // server responded with !2xx
        console.log(error.response.data); // leaving out statusCode & statusText 
    } else if (error.request) { // no response was received

    } else { // setting up the request triggered error
        console.log(error.message);
    }
    // config that was provided to `axios` for the request: helps debug
    // console.log(error.config);
}

export default instance;