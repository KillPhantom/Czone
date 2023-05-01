import axios from "axios";

export default (async function GetTransactionsService(
  apiKey: string,
  addressType: number,
  startBlockNumber?: number,
  endBlockNumber?: number
): Promise<any> {
  const { data } = await axios.get("/get-transactions", {
    params: {
      api_key: apiKey,
      address_type: addressType,
      start_block_number: startBlockNumber,
      end_block_number: endBlockNumber,
    },
  });

  return { data };
});
