type PropsType = {
  overrideStyle?: any;
};

const Rects = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 60 60"
      fill="none"
      style={{ ...overrideStyle }}
    >
      <path
        d="M0 0V30H30V0H0ZM37.5 15V37.5H15V45H45V15H37.5ZM52.5 30V52.5H30V60H60V30H52.5Z"
        fill="#F9D744"
      />
    </svg>
  );
};
export default Rects;
