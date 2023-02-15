import { useCallback } from 'react';
import useHttp, { HttpClient } from '../services/useHttp';
import envConfiguration from '../services/envValues';
import { AlertDTO, AlertSortByString } from '../models/alert';

type AlertSearchPayload = {
  page: number;
  size: number;
  sortBy?: AlertSortByString;
  desc?: boolean;
  filter?: string;
};
export default function useAlertsApi() {
  const { client } = useHttp();

  type GetAlertsResponse = {
    page: number;
    size: number;
    total: number;
    content: AlertDTO[];
  };

  function getAlerts(
    httpClient: HttpClient,
    page: number,
    size: number,
    sortBy: AlertSortByString,
    desc: boolean,
    filter?: string
  ) {
    const sortByString = sortBy || 'ALERTDATE';
    const isDesc = sortBy ? desc : true;

    const payload: AlertSearchPayload = filter
      ? {
          page,
          size,
          sortBy: sortByString,
          desc: isDesc,
          filter,
        }
      : {
          page,
          size,
          sortBy: sortByString,
          desc: isDesc,
        };
    return httpClient.post<any, { data: GetAlertsResponse }>(
      `${envConfiguration.apiUrl}monitor/alerts/search`,
      payload
    );
  }

  const getAlertCallback = useCallback(getAlerts, []);

  const getAlertsApiCallback = useCallback(
    (
      page: number,
      size: number,
      sortBy: AlertSortByString,
      desc: boolean,
      filter: string
    ) => getAlertCallback(client, page, size, sortBy, desc, filter),
    [client, getAlertCallback]
  );

  return {
    getAlertsApi: getAlertsApiCallback,
  };
}
