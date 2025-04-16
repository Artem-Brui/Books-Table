import { ReqBodyPATCH, ReqBodyPOST } from "./types/Requests";

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

const BASE_URL = import.meta.env.VITE_SERVER_URL;

async function request<T>(
  url: string,
  method: RequestMethod = "GET",
  data?: null | ReqBodyPOST | ReqBodyPATCH
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };
  }

  return fetch(BASE_URL + url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  post: <T>(url: string, data: ReqBodyPOST) => request<T>(url, "POST", data),
  patch: <T>(url: string, data: ReqBodyPATCH) => request<T>(url, "PATCH", data),
  delete: <T>(url: string) => request<T>(url, "DELETE"),
};
