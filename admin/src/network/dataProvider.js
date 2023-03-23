import axios from 'axios';
import { fetchUtils } from 'react-admin'
import {handleUpload} from './firebase';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('token'));
    options.headers.set('Content-Type', 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin", "*", 'Authorization', 'Access-Control-Expose-Headers', 'X-Total-Count', `Token ${token}`);
    return fetchUtils.fetchJson(url, options);
};
const token = localStorage.getItem('token');
const headers = {
    "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json',
    "Authorization": `Token ${token}`,
}

let apiUrl = 'web-laptopp.herokuapp.com';
const dataProvider1 = {
    getPermissions: () => Promise.resolve({
        permissions: [
            { action: ['list', 'edit'], resource: 'product' },
        ],
    }),
    getOne: async (resource, params) => {
        console.log(params["id"])
        const rawSummary = (await axios.get(`https://${apiUrl}/${resource}/${params["id"]}`, { headers })).data;
        console.log(rawSummary)
        return {
            data: rawSummary,
            total: rawSummary.length
        };

    },
    create: async (resource, params) => {
        // console.log(params)
        // let a =[];
        // console.log(JSON.parse(JSON.stringify(params.data)))
        // a= JSON.parse(JSON.stringify(params.data))
        // let jsonn;
        // jsonn = delete JSON.stringify(params.data)['picture']
        // console.log(jsonn)


        // console.log(a)
        

        let p;
        console.log(JSON.stringify(params.data));
        let json = JSON.stringify(params.data);
        var result = [];
        
        
        result = JSON.parse(json);

        var pic = result["pictures"]["src"];
        var namePic = result["pictures"]["title"]
        console.log(pic);
        console.log(namePic);
        delete result["pictures"];

        console.log(JSON.stringify(result,namePic));
        
        let blob = await fetch(pic).then(r => r.blob());
        

        var a=await  handleUpload(blob,namePic);
        await a;
        var b = await setTimeout(() => {  console.log("World!"); }, 5000);
            result["hinhanh"]=`${await a}`;
            console.log(result);
        console.log(a);
        
       

       

        // await axios.post(`https://${apiUrl}/${resource}`, result, { headers }).then(response => {
        //     console.log(response);
        //     p = response
        // })
        // if (p.status == 201) {
        //     return params;
        // }
        // else
        //     return p
    },
    update: async (resource, params) => {
        let p;
        console.log(params.data["id"]);
        console.log(JSON.stringify(params.data));
        let json = JSON.stringify(params.data);
        console.log(json);
        await axios.post(`https://${apiUrl}/${resource}/${params.data["id"]}`, json, { headers },).then(response => {
            console.log(response);
            p = response
        })
        if (p.status == 201) {
            return params;
        }
        else
            return p
    },
    delete: async (resource, params) => {
        let p;
        console.log(resource);
        console.log(params);
        let json = JSON.stringify(params.data);
        console.log(json);
        await axios.post(`https://${apiUrl}/${resource}/${params["url"]}/delete`, { headers }).then(response => {
            console.log(response);
            p = response
        })
        if (p.status == 201) {
            return params;
        }
        else
            return p
    },

    getList: async (options) => {
        const rawSummary = (await axios.get(`https://${apiUrl}/${options}`, { headers })).data;
        console.log(rawSummary)
        return {
            data: rawSummary,
            total: rawSummary.length
        };

    }
};
export { dataProvider1 };



