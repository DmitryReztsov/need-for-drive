import axios from 'axios';

export const baseUrl = 'http://api-factory.simbirsoft1.com/api/db/';

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-Api-Factory-Application-Id': process.env.React_App_Application_Id!,
  },
});
