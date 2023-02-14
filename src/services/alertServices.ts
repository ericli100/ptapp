import { useCallback } from 'react';
import useAlertsApi from '../api/useAlertsApi';
import { Alert, AlertDTO, AlertsInfo } from '../models/alert';

function convertAlertDTO(dto: AlertDTO): Alert {
  return {
    reviewStatus: dto.reviewStatus,
    name: dto.monitoredSubjectName,
    id: dto.npi,
    alertType: dto.monitorProduct,
    source: dto.sourceName,
    result: dto.resultStatus as 'Match' | 'Suspected Match' | 'No Match',
    creationDate: new Date(dto.alertDate),
  };
}

export default function useAlertServices() {
  const { getAlertsApi } = useAlertsApi();

  const getAlertsCallback = useCallback(
    async function getAlerts(page: number, size: number): Promise<AlertsInfo> {
      const { data } = await getAlertsApi(page, size);
      return {
        page: data.page,
        size: data.size,
        total: data.total,
        alerts: data.content.map(convertAlertDTO),
        pageCount: Math.ceil(data.total / data.size),
      };
    },
    [getAlertsApi]
  );

  return {
    getAlerts: getAlertsCallback,
  };
}
