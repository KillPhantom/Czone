type PropsType = {
  overrideStyle?: any;
};

const ThumbUp = ({ overrideStyle }: PropsType) => {
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
        d="M7.5 8.33366V15.8337L8.1526 16.0512C9.3762 16.4591 10.6575 16.667 11.9473 16.667H14.2073C15.6373 16.667 16.8685 15.6576 17.149 14.2553L17.5649 12.176C17.9522 10.2391 16.3945 8.46292 14.4236 8.59431L12.0833 8.75033L12.3508 5.80816C12.4309 4.92685 11.737 4.16699 10.8521 4.16699C10.3234 4.16699 9.83359 4.44435 9.56161 4.89763L7.5 8.33366Z"
        fill="#C1C7D0"
      />
      <rect
        x="1.6665"
        y="7.5"
        width="4.16667"
        height="9.16667"
        rx="1"
        fill="#C1C7D0"
      />
    </svg>
  );
};
export default ThumbUp;
