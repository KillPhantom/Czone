export const TRANSACTION_COLUMNS = [
  {
    title: "Block Number",
    dataIndex: "block_number",
    width: 130,
  },
  {
    title: "From Address",
    dataIndex: "from_address",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    //   sorter: (a: any, b: any) => a.name.length - b.name.length,
    //   sortDirections: ["descend"],
  },
  {
    title: "To Address",
    dataIndex: "to_address",
    // defaultSortOrder: "descend",
    // sorter: (a: any, b: any) => a.age - b.age,
  },
  {
    title: "Contract Address",
    dataIndex: "contract_address",
  },
  {
    title: "txn index",
    dataIndex: "transaction_index",
    width: 100,
  },
  {
    title: "Transaction Hash",
    dataIndex: "transaction_hash",
    render: (text: string) => {
      const link = `https://etherscan.io/tx/` + text;
      return (
        <a href={link} target="_blank">
          {text}
        </a>
      );
    },
  },
  {
    title: "Token Name",
    dataIndex: "token_name",
    width: 100,
  },
  {
    title: "Token Symbol",
    dataIndex: "token_symbol",
    width: 100,
    filters: [
      {
        text: "OHM",
        value: "OHM",
      },
      {
        text: "ETH",
        value: "ETH",
      },
    ],
    onFilter: (value: any, record: any) => record.token_symbol === value,
  },
  {
    title: "Token Transferred ",
    dataIndex: "token_transfer_number",
    sorter: (a: any, b: any) =>
      a.token_transfer_number - b.token_transfer_number,
    sortDirections: ["descend"],
  },
  {
    title: "ETH value",
    dataIndex: "value",
  },
  {
    title: "txn fee(eth)",
    dataIndex: "transaction_fee",
  },
  {
    title: "UTC time",
    dataIndex: "timestamp",
    width: 100,
  },

  {
    title: "Nonce",
    dataIndex: "nonce",
    width: 100,
  },
];

export const ADDRESS_TYPE = {
  CONTRACT: 1,
  USER: 2,
};

export const MODULE_TYPES = {
  TEXT: 0,
  LINK: 1,
  IMAGE: 2,
  TAB: 3,
  BOT_TWITTER: 4,
  BOT_DISCORD: 5,
  BOT_MIRROR: 6,
};
