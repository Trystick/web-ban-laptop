import axios from 'axios';
import config from 'admin/src/network/response/request/config.js';
axios(config.config) .then(function (response) {
    console.log('Send REST Api result: ');
    let dataResponse = response.data;
    if (dataResponse != null) {
        this.setState({                            
            codeResult: JSON.stringify(dataResponse),
        })
        console.log(JSON.stringify(dataResponse));
    }
})
.catch(function (error) {
    console.log('error request api');
    console.log('NetworkStatus: ' + error.toString());
    let statusText = '';
    try {
        statusText = error.response.statusText;
    } catch (e) {

    }
    console.log(error.toString() + ".\n" + statusText);
});