import axios from "axios";
import { AddressType } from "../data/types/CompanyInfoType";

export default (async function AddAddressService(
  addressHash: string,
  isContract: boolean,
  addressName?: string
): Promise<AddressType> {
  const { data } = await axios.post("/add-address", {
    address_hash: addressHash,
    contract_name: addressName,
    is_contract_address: isContract,
  });

  return {
    hash: addressHash,
    is_contract_address: isContract,
    name: addressName,
    is_selected: false,
  };
});
