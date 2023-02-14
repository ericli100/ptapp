import { useCallback } from 'react';
import useHttp, { HttpClient } from '../services/useHttp';
import envConfiguration from '../services/envValues';
import { AlertDTO } from '../models/alert';

export default function useAlertsApi() {
  const { client } = useHttp();

  type GetAlertsReponse = {
    page: number;
    size: number;
    total: number;
    content: AlertDTO[];
  };

  function getAlerts(httpClient: HttpClient, page: number, size: number) {
    return httpClient.post<any, { data: GetAlertsReponse }>(
      `${envConfiguration.apiUrl}monitor/alerts/search`,
      {
        page,
        size,
        sortBy: 'ALERTDATE',
        desc: true,
      }
    );
  }

  const getAlertCallback = useCallback(getAlerts, []);

  const getAlertsApiCallback = useCallback(
    (page: number, size: number) => getAlertCallback(client, page, size),
    [client, getAlertCallback]
  );

  return {
    getAlertsApi: getAlertsApiCallback,
  };
}
