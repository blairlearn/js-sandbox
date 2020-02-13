const axios = require('axios');

axios.get('http://localhost:5000/terms/count/Cancer.gov/patient/en')
    .then(function (rsp) { console.log(rsp.data); })
    .catch(function (err) { console.log(err); })
    .finally(() => console.log('done'));

axios.get('http://localhost:5000/Autosuggest/Cancer.gov/Patient/en/chil')
    .then(function (rsp) { console.log(rsp.data); })
    .catch(function (err) { console.log(err); })
    .finally(() => console.log('done'));

