import { SortingState } from '@tanstack/react-table';
import { useCallback } from 'react';
import useAlertsApi from '../api/useAlertsApi';
import {
  Alert,
  AlertDTO,
  AlertSortByString,
  AlertsInfo,
} from '../models/alert';

function convertAlertDTO(dto: AlertDTO): Alert {
  return {
    reviewStatus: dto.reviewStatus ?? '',
    name: dto.monitoredSubjectName ?? '',
    id: dto.npi ?? '',
    alertType: dto.monitorProduct ?? '',
    source: dto.sourceName ?? '',
    result:
      (dto.resultStatus as 'Match' | 'Suspected Match' | 'No Match') ?? ' ',
    creationDate: new Date(dto.alertDate),
  };
}

type SortParam = {
  sortBy: AlertSortByString | undefined;
  desc: boolean | undefined;
};

export function convertSortingStateToSortParams(
  sorting: SortingState
): SortParam {
  // UI supports only one sort.

  if (sorting.length === 0) {
    return { sortBy: undefined, desc: undefined };
  }
  const { id: sortByString, desc } = sorting[0];
  let sortBy: AlertSortByString;
  switch (sortByString) {
    case 'reviewStatus':
      sortBy = 'REVIEWSTATUS';
      break;
    case 'name':
      sortBy = 'MONITOREDSUBJECTNAME';
      break;
    case 'id':
      sortBy = 'NPI';
      break;
    case 'alertType':
      sortBy = 'MONITORPRODUCT';
      break;
    case 'source':
      sortBy = 'SOURCENAME';
      break;
    case 'result':
      sortBy = 'RESULTSTATUS';
      break;
    case 'creationDate':
      sortBy = 'ALERTDATE';
      break;
    default:
      throw new Error(`Invalid sortBy string: ${sortByString}`);
  }

  return { sortBy, desc };
}

export default function useAlertServices() {
  const { getAlertsApi } = useAlertsApi();

  const getAlertsCallback = useCallback(
    async function getAlerts(
      page: number,
      size: number,
      sortBy?: AlertSortByString,
      desc?: boolean
    ): Promise<AlertsInfo> {
      const { data } = await getAlertsApi(page, size, sortBy, desc);
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
