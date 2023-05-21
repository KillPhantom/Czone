import axios from "axios";
import { AddressType } from "../data/types/CompanyInfoType";

export default (async function SaveAddressSelection(
  addresses: Array<AddressType | null | undefined>
): Promise<any> {
  const { data } = await axios.post("/save-address-selection", {
    addresses: addresses,
  });

  return data;
});
