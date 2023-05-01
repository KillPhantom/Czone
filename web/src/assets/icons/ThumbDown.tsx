type PropsType = {
  overrideStyle?: any;
};

const ThumbDown = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{ ...overrideStyle }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9087 13.3333V5.83333L11.2561 5.6158C10.0325 5.20793 8.75114 5 7.46136 5H5.20143C3.77139 5 2.54015 6.00938 2.2597 7.41165L1.84383 9.49098C1.45645 11.4279 3.01423 13.2041 4.98513 13.0727L7.32536 12.9167L7.05789 15.8588C6.97777 16.7401 7.67169 17.5 8.55662 17.5C9.08524 17.5 9.5751 17.2226 9.84708 16.7694L11.9087 13.3333Z"
        fill="#C1C7D0"
      />
      <rect
        x="17.7422"
        y="14.167"
        width="4.16667"
        height="9.16667"
        rx="1"
        transform="rotate(-180 17.7422 14.167)"
        fill="#C1C7D0"
      />
    </svg>
  );
};
export default ThumbDown;
