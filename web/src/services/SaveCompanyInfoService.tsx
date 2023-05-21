import axios from "axios";

export default (async function SaveCompanyInfoServices(
  surveyForm: any
): Promise<any> {
  const { data } = await axios.post("api/save-info", {
    surveyForm,
  });

  return data.data;
});
