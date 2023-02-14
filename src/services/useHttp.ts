// Disable no-unused-vars rules because of the type definitions.
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useMemo, useCallback } from 'react';

type HttpGet = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  config?: AxiosRequestConfig<D>
) => Promise<R>;

type HttpPost = <T = any, R = AxiosResponse<T>, D = any>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig<D>
) => Promise<R>;

export type HttpClient = {
  get: HttpGet;
  post: HttpPost;
};

function useHttp() {
  const { getAccessTokenSilently } = useAuth0();

  async function createHttpClient() {
    const token = await getAccessTokenSilently();

    axios.defaults.headers.post.Authorization = `Bearer ${token}`;
    axios.defaults.headers.get.Authorization = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] =
      'application/vnd.providertrust-v1.0+json';
    axios.defaults.headers.get['Content-Type'] =
      'application/vnd.providertrust-v1.0+json';

    return axios;
  }

  const createHttpClientCallback = useCallback(createHttpClient, [
    getAccessTokenSilently,
  ]);

  const get: HttpGet = useMemo(
    () =>
      async <T = any, R = AxiosResponse<T>, D = any>(
        url: string,
        config?: AxiosRequestConfig<D>
      ): Promise<R> => {
        const axioClient = await createHttpClientCallback();
        let result: void | Awaited<R>;
        try {
          result = await axioClient.get<T, R, D>(url, config);
          return result;
        } catch (error) {
          // TODO: EL - handle error, such as 401 here.
          console.error(`An error occurred using HttpGet: ${error}`);
          throw error;
        }
      },
    [createHttpClientCallback]
  );

  const post: HttpPost = useCallback(
    async <T = any, R = AxiosResponse<T>, D = any>(
      url: string,
      data?: D,
      config?: AxiosRequestConfig<D>
    ): Promise<R> => {
      const axioClient = await createHttpClientCallback();
      let result: void | Awaited<R>;
      try {
        result = await axioClient.post<T, R, D>(url, data, config);
        return result;
      } catch (error) {
        // TODO: EL - handle error, such as 401 here.
        console.error(`An error occurred using HttpPost: ${error}`);
        throw error;
      }
    },
    [createHttpClientCallback]
  );

  const client: HttpClient = useMemo(
    () => ({
      get,
      post,
    }),
    [get, post]
  );

  return { client };
}

export default useHttp;
