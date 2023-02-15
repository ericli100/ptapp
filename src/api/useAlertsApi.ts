import { useCallback } from 'react';
import useHttp, { HttpClient } from '../services/useHttp';
import envConfiguration from '../services/envValues';
import { AlertDTO, AlertSortByString } from '../models/alert';

export default function useAlertsApi() {
  const { client } = useHttp();

  type GetAlertsReponse = {
    page: number;
    size: number;
    total: number;
    content: AlertDTO[];
  };

  function getAlerts(
    httpClient: HttpClient,
    page: number,
    size: number,
    sortBy?: AlertSortByString,
    desc?: boolean
  ) {
    const sortByString = sortBy ?? 'ALERTDATE';
    const isDesc = sortBy ? desc : true;

    return httpClient.post<any, { data: GetAlertsReponse }>(
      `${envConfiguration.apiUrl}monitor/alerts/search`,
      {
        page,
        size,
        sortBy: sortByString,
        desc: isDesc,
      }
    );
  }

  const getAlertCallback = useCallback(getAlerts, []);

  const getAlertsApiCallback = useCallback(
    (page: number, size: number, sortBy?: AlertSortByString, desc?: boolean) =>
      getAlertCallback(client, page, size, sortBy, desc),
    [client, getAlertCallback]
  );

  return {
    getAlertsApi: getAlertsApiCallback,
  };
}
