// Disable no-unused-vars rules because of the type definitions.
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

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
    // TODO: EL - get token.
    const token = await getAccessTokenSilently();
    // const token =
    //   'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InNscGJyQlpMWmtNakdNYV8tWldqciJ9.eyJodHRwczovL3Byb3ZpZGVydHJ1c3QuY29tL2NsaWVudE5hbWUiOiJQcm92aXNpb25zIEdyb3VwIiwiaHR0cHM6Ly9wcm92aWRlcnRydXN0LmNvbS9jbGllbnRJZCI6IjkzNjA1YjM1LTY2YzMtNDc2Ni1iMjEzLWEzY2YwMTQ0M2VmOCIsImh0dHBzOi8vcHJvdmlkZXJ0cnVzdC5jb20vdXNlcklkIjoiN2FmYWE0YTUtOWQ0OC00MDM2LTkzNzMtMzE4MjIwMDEzNTY1IiwiaHR0cHM6Ly9wcm92aWRlcnRydXN0LmNvbS9tb25pdG9yUHJvZHVjdHMiOlsiT1BUT1VUIiwiTlBJIiwiT0ZBQyIsIkNNU19QUkVDTFVTSU9OX0xJU1QiLCJTU0RNRiIsIkVYQ0xVU0lPTlMiXSwiaHR0cHM6Ly9wcm92aWRlcnRydXN0LmNvbS9yb2xlcyI6WyJST0xFX0NMSUVOVF9BRE1JTiJdLCJodHRwczovL3Byb3ZpZGVydHJ1c3QuY29tL3VzZXJuYW1lIjoiZXJpYy5saStwdEBwcm92aXNpb25zZ3JvdXAuY29tIiwiaHR0cHM6Ly9wcm92aWRlcnRydXN0LmNvbS9uYW1lIjoiRXJpYyBMaSIsImh0dHBzOi8vcHJvdmlkZXJ0cnVzdC5jb20vaW5zdGFudFNlYXJjaCI6Ik9OR09JTkdfT05MWSIsImh0dHBzOi8vcHJvdmlkZXJ0cnVzdC5jb20vYWxsb3dEb2N1bWVudFN0b3JhZ2UiOnRydWUsImh0dHBzOi8vcHJvdmlkZXJ0cnVzdC5jb20vZGF5c1RvQXV0b1Rlcm0iOm51bGwsImh0dHBzOi8vcHJvdmlkZXJ0cnVzdC5jb20vZW5hYmxlZEluc3RhbnRTZWFyY2giOnRydWUsImh0dHBzOi8vcHJvdmlkZXJ0cnVzdC5jb20vZW5hYmxlZE9uZ29pbmdNb25pdG9yaW5nIjp0cnVlLCJpc3MiOiJodHRwczovL2xvZ2luLmRldi1wcm92aWRlcnRydXN0LmNvbS8iLCJzdWIiOiJhdXRoMHw2M2U0MTQ0Y2MyNjZlZmJjNTMyZDY3Y2YiLCJhdWQiOiJodHRwczovL2FwaS5vbmUtcGxhdGZvcm0uZGV2LXByb3ZpZGVydHJ1c3QuY29tIiwiaWF0IjoxNjc2MTgzNDE5LCJleHAiOjE2NzYyMjY2MTksImF6cCI6IkVuNjFUZDh1V2JSSEN4emZMeWNtcmxQcEpRTGFmNzNxIiwic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyIsImd0eSI6WyJyZWZyZXNoX3Rva2VuIiwicGFzc3dvcmQiXX0.HNbfZYEeMWk3UxHb07hoVO51F6LkFn6c8Lhw1gPJwW-tblPz3PDhZ20G44ykzu7Hr8zQSih2xX0yErsQ7g-zkIfbMresLj0zH36LFPnAwz6PCT8-0EJaQ8FfMTDGFqVjbshKsvOUZEtPm99Q_0YEzBd4y6Ag6Fesx2lkQGtN-jI9YLQ--XvTVPm5J5cukru6orQ344L6kr0d-SJiGjV48fUG3QpBt8-cv86N0gSSoz3WC6kAtqXT5Rd_Xe6VQ74sxz-x0meUbJpfNxaqyz2odLWK8V18sC-YkdHE0-GZ87xNV8cf2D9umEN4EptJSl2CZ_WUP0KFoSZz43VkFWlWNg';

    axios.defaults.headers.post.Authorization = `Bearer ${token}`;
    axios.defaults.headers.get.Authorization = `Bearer ${token}`;

    return axios;
  }

  const get: HttpGet = async <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => {
    const axioClient = await createHttpClient();
    let result: void | Awaited<R>;
    try {
      result = await axioClient.get<T, R, D>(url, config);
      return result;
    } catch (error) {
      // TODO: EL - handle error, such as 401 here.
      console.error(`++++++++HERE COMES AN ERROR ++++++++: ${error}`);
      throw error;
    }
  };

  const post: HttpPost = async <T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ): Promise<R> => {
    const axioClient = await createHttpClient();
    let result: void | Awaited<R>;
    try {
      result = await axioClient.post<T, R, D>(url, data, config);
      return result;
    } catch (error) {
      // TODO: EL - handle error, such as 401 here.
      console.error(`++++++++HERE COMES AN ERROR ++++++++: ${error}`);
      throw error;
    }
  };

  const client: HttpClient = {
    get,
    post,
  };

  return { client };
}

export default useHttp;
