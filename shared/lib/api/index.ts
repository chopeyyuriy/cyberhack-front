import axios, { AxiosError } from "axios";
import { GetServerSidePropsContext } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export enum STATUS_CODES {
  UNAUTHORIZED = 401,
  FOUND = 302,
}

const isServer = typeof window === "undefined";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: false
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import("next/headers");
    const token = cookies().get("accessToken")?.value;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1",
    );

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    const errors = error.response?.data?.errors;
    if (error.response?.status === STATUS_CODES.UNAUTHORIZED) {
      redirect("/login");
      return Promise.reject(error);
    }

    if (errors) {
      for (const [key, value] of Object.entries(errors)) {
        for (const message of value as any) {
          toast.error(message);
        }
      }
    }

    return Promise.reject(error);
  },
);
