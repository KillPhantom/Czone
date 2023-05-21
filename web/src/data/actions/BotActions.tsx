import SaveCompanyInfoService from "@services/SaveCompanyInfoService";

export const SAVE_INFO = "SAVE_INFO" as const;

export const saveCompanyInfo = (surveyForm: Array<string>) => ({
  type: SAVE_INFO,
  payload: SaveCompanyInfoService(surveyForm),
});
