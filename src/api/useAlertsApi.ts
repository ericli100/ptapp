import useHttp, { HttpClient } from '../services/useHttp';
import envConfiguration from '../services/envValues';

export default function useAlertsApi() {
  const { client } = useHttp();

  function getAllAlertsApi(httpClient: HttpClient) {
    return httpClient.post(`${envConfiguration.apiUrl}monitor/alerts/search`);
  }

  return { getAllAlerts: () => getAllAlertsApi(client) };
}
