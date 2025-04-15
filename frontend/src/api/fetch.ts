import { ReqBodyDELETE, ReqBodyPATCH, ReqBodyPOST } from "./types/Requests";

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

const BASE_URL = 'http://localhost:3003';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

async function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  data?: null | ReqBodyPOST | ReqBodyPATCH | ReqBodyDELETE,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(1000)
    .then(() => fetch(BASE_URL + url, options))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: ReqBodyPOST) => request<T>(url, 'POST', data),
  patch: <T>(url: string, data: ReqBodyPATCH) => request<T>(url, 'PATCH', data),
  delete: <T>(url: string) => request<T>(url, 'DELETE'),
};
