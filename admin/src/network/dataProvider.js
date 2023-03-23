import axios from 'axios';
import {handleUpload} from './firebase';
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
        //console.log(JSON.stringify(params.data));
        let json = JSON.stringify(params.data);
        var result = [];
        
        
        result = JSON.parse(json);

       
       
        
        console.log(result)

        //console.log(JSON.stringify(result,namePic));
        
        let a ;
        var i=0;
        async function pic(){
            var  picLink =[];
            var i=0;
           await result["pictures"].forEach(async element => {
                let blob = await fetch(element["src"]).then(r => r.blob())
                //await result["hinhanh"][{"hinhanh": await handleUpload(blob,element["title"])}]
                await handleUpload(blob,element["title"]).then((v)=>{
                    picLink.push({"hinhanh":v})
                    console.log(picLink)
                    result["hinhanh"] = picLink
                    console.log(result)
                    i++;
                    
                })
                if(i==result["pictures"].indexOf(element))
                    return result

            })
            return result
           
        }
        
        const something = await pic();
        console.log(something);
        setTimeout(async () => {
            delete result["pictures"]
            console.log(JSON.stringify(result))
            await axios.post(`https://${apiUrl}/${resource}`, JSON.stringify(result), { headers }).then(response => {
            console.log(response);
            p = response
        })
        if (p.status == 201) {
            return params;
        }
        else
            return p

        }, 10000);
       
        
        
        

        
    },
    update: async (resource, params) => {
        let p;
        console.log(params.data["id"]);
        console.log(JSON.stringify(params.data));
        let json = JSON.stringify(params.data);
        console.log(json);
        await axios.put(`https://${apiUrl}/${resource}/${params.data["id"]}`, json, { headers },).then(response => {
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
        await axios.put(`http://${apiUrl}/${resource}/${params["id"]}/delete`,null, { headers }).then(response => {
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



