export type Alert = {
  reviewStatus: string;
  name: string;
  id: string;
  alertType: string;
  source: string;
  result: 'Match' | 'Suspected Match' | 'No Match';
  creationDate: Date;
};

// {
//   "id "ffd718ed-f8ac-4d96-baca-829ef8b7548f",
//   "externalId "63cac94dfc13ae7c60000054",
//   "monitoredSubjectName "Judon De Angelis",
//   "nameOnSource "Judon De Angelis",
//   "resultStatus "NPI Not Found",
//   "npi "1167133641",
//   "reviewStatus "Needs Review",
//   "monitoredSubjectId "a58f573c-6499-499a-af6a-534052837dc2",
//   "searchType "Ongoing",
//   "monitorProduct "NPI Validation",
//   "sourceName "NPPES",
//   "alertDate "2023-01-31T17:07:56.674+0000"
// }

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
