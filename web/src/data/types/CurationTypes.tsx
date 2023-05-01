export type CurationContentType = {
  tabTitle?: string;
  title?: string;
  body: Array<CurationBodyType | null>;
};

export type CurationBodyType = {
  type: number;
  content: any;
  id: string;
  title?: string;
};
