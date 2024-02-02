import axios from "axios";
import { useAuthStore } from "../stores/auth";
import { useToast } from 'vue-toastification';
import { useSystemStore } from "../stores/system";

const authStore = useAuthStore();
const toast = useToast();
const systemStore = useSystemStore();

export default class ApiClient {
    
    constructor() {
        systemStore.reset()
    }

    async get(path, model) {
        try {
            const response = await axios.get(path, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Bearer ${authStore.user.authorization.token}`
                },
            });
            systemStore.reset()
            return response.data;
            
        } catch (error) {
            this.handleError(error, model)
        }
    }

    async post(path, body, model, method = null) {
        try {

            const formData = new FormData();
            let isMultipart = false;

            for (const key in body) {
                if (body[key] instanceof File || body[key] instanceof Blob) {
                    formData.append(key, body[key]);
                    isMultipart = true; // Set the flag to true if a file is found
                } else {
                    formData.append(key, body[key]);
                }

            }

            if(method !== null) {
                formData.append('_method', method);
            }

            const headers = {
                "Accept": "application/json",
                "Authorization": `Bearer ${authStore.user.authorization.token}`,
            };
    
            if (isMultipart) {
                headers["Content-Type"] = "multipart/form-data";
            } else {
                headers["Content-Type"] = "application/json";
            }

            // console.log(formData);
            

            const data = await axios.post(path, formData, {
                headers: headers,
            });

            systemStore.reset()
            return data;
            
        } catch (error) {
           this.handleError(error, model)
        }
    }

    async patch(path, body, model) {
        
        try {

            const formData = new FormData();
            let isMultipart = false;

            for (const key in body) {
                if (body[key] instanceof File || body[key] instanceof Blob) {
                    
                    formData.append(key, body[key]);
                    isMultipart = true; // Set the flag to true if a file is found
                } else {
                    formData.append(key, body[key] === null ? null : body[key] );
                }

            }

            const headers = {
                "Accept": "application/json",
                "Authorization": `Bearer ${authStore.user.authorization.token}`,
            };
    
            if (isMultipart) {
                headers["Content-Type"] = "multipart/form-data";
            } else {
                headers["Content-Type"] = "application/json";
            }

            // console.log(isMultipart);
            // console.log(headers);
            // console.log(body);

            // console.log(formData, headers)
            const data = await axios.patch(path, isMultipart ? formData : body, {
                headers: headers,
            });
            
            systemStore.reset()
            return data;
        } catch (error) {
            this.handleError(error, model)
        }
    }

    async delete(path, model) {
        
        try {

            const headers = {
                "Accept": "application/json",
                "Authorization": `Bearer ${authStore.user.authorization.token}`,
            };

            const data = await axios.delete(path, {
                headers: headers,
            });
            
            systemStore.reset()
            return data;
        } catch (error) {
            this.handleError(error, model)
        }
    }

    handleError(error, model) {
        console.log('mali')
        console.log(error)

        if(error.response.status === 500) {
            toast.error('Oops, something went wrong.', { position: 'bottom-right' })
        } else if(error.response.status === 401) {
            authStore.handleLogout()
        } else if(error.response.status === 403) {
            if(error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error(`Access denied. You do not have the required permission to perform this action.`)
            }
            
        }

        systemStore.error = { [model]: error.response.data.errors }

        return error
    }

}