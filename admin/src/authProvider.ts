import { AuthProvider ,AUTH_LOGIN} from 'react-admin';
import axios from 'axios';

export const authProvider: AuthProvider = {
    // called when the user attempts to log in
    login: async ({ username, password }) =>  {

        const request = await axios.post(
            'https://web-laptopp.herokuapp.com/loginadmin',
            
            JSON.stringify({ username, password }),
            {
                
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                   
                }
                
            }

          );

          console.log(request);
         
                if (request.status < 200 || request.status >= 300) {
                    throw new Error(request.statusText);
                }
                
            
            else {
                console.log(request);
                localStorage.setItem('token', request.data);
                console.log(localStorage.getItem('token'));
            }
                
        
           
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }: { status: number }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};


export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request('https://mydomain.com/authenticate', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(({ token }) => {
                localStorage.setItem('token', token);
            });
    }
    return Promise.resolve();
}