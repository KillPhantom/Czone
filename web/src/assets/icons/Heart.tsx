type PropsType = {
  overrideStyle?: any;
  color?: string;
};

const Heart = ({ overrideStyle, color }: PropsType) => {
  return (
    <svg
      width="18"
      height="16"
      viewBox="0 0 18 16"
      fill="none"
      style={{ ...overrideStyle }}
    >
      <path
        d="M13.5 0.5C11.8905 0.5 10.0083 2.32463 9 3.5C7.99175 2.32463 6.1095 0.5 4.5 0.5C1.651 0.5 0 2.72218 0 5.55041C0 10.25 9 15.5 9 15.5C9 15.5 18 10.25 18 5.75C18 2.92177 16.349 0.5 13.5 0.5Z"
        fill={color ?? "#C1C7D0"}
      />
    </svg>
  );
};
export default Heart;
