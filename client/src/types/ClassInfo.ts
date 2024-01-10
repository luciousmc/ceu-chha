export interface ClassInfo {
  topic: string;
  date: Date;
  am_pm: string;
  platform: 'Zoom' | 'On-site';
  status: 'Paid' | 'Unpaid';
}
