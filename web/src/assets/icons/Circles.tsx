type PropsType = {
  overrideStyle?: any;
};

const Circle = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 60 60"
      fill="none"
      style={{ ...overrideStyle }}
    >
      <path
        d="M30 0C13.5 0 0 13.5 0 30C0 46.5 13.5 60 30 60C46.5 60 60 46.5 60 30C60 13.5 46.5 0 30 0ZM30 7.5C42.45 7.5 52.5 17.55 52.5 30C52.5 42.45 42.45 52.5 30 52.5C17.55 52.5 7.5 42.45 7.5 30C7.5 17.55 17.55 7.5 30 7.5ZM30 15C21.75 15 15 21.75 15 30C15 38.25 21.75 45 30 45C38.25 45 45 38.25 45 30C45 21.75 38.25 15 30 15ZM30 22.5C34.2 22.5 37.5 25.8 37.5 30C37.5 34.2 34.2 37.5 30 37.5C25.8 37.5 22.5 34.2 22.5 30C22.5 25.8 25.8 22.5 30 22.5Z"
        fill="#F1E330"
      />
    </svg>
  );
};
export default Circle;
