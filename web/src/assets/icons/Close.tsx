type PropsType = {
  overrideStyle?: any;
};

const Close = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      style={{ ...overrideStyle }}
    >
      <rect width="22" height="22" rx="5" fill="#F1F1F5" />
      <path
        d="M15 7L7 15"
        stroke="#B0B7C3"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7L15 15"
        stroke="#B0B7C3"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Close;
