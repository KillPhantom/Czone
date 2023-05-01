import axios from "axios";

export default (async function DeleteAddressService(
  addressHash: string,
  isContract: boolean
): Promise<any> {
  const { data } = await axios.post("/delete-address", {
    hash: addressHash,
    test: "fasdfasf",
  });
  return { addressHash, isContract };
});
