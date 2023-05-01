type PropsType = {
  overrideStyle?: any;
};

const Plus = ({ overrideStyle }: PropsType) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      style={{ ...overrideStyle }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8333 6.33333C10.8333 5.8731 10.4602 5.5 10 5.5C9.53976 5.5 9.16667 5.8731 9.16667 6.33333V9.66667H5.83333C5.3731 9.66667 5 10.0398 5 10.5C5 10.9602 5.3731 11.3333 5.83333 11.3333H9.16667V14.6667C9.16667 15.1269 9.53976 15.5 10 15.5C10.4602 15.5 10.8333 15.1269 10.8333 14.6667V11.3333H14.1667C14.6269 11.3333 15 10.9602 15 10.5C15 10.0398 14.6269 9.66667 14.1667 9.66667H10.8333V6.33333Z"
        fill="#696974"
      />
    </svg>
  );
};
export default Plus;
