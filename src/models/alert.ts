export type AlertResult = 'Match' | 'Suspected Match' | 'No Match';
export type Alert = {
  reviewStatus: string;
  name: string;
  id: string;
  alertType: string;
  source: string;
  result: AlertResult;
  creationDate: Date;
};

export type AlertDTO = {
  id: string;
  externalId: string;
  monitoredSubjectName: string;
  nameOnSource: string;
  resultStatus: string;
  npi: string;
  reviewStatus: string;
  monitoredSubjectId: string;
  searchType: string;
  monitorProduct: string;
  sourceName: string;
  alertDate: Date;
};

export type AlertsInfo = {
  page: number;
  size: number;
  alerts: Alert[];
  total: number;
  pageCount: number;
};

export type AlertSortByString =
  | 'MONITOREDSUBJECTNAME'
  | 'NPI'
  | 'MONITORPRODUCT'
  | 'SOURCENAME'
  | 'RESULTSTATUS'
  | 'ALERTDATE'
  | 'REVIEWSTATUS'
  | 'ALERTREASONS';
