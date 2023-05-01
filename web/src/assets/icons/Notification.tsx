type PropsType = {
  hasNewMsg?: boolean;
  overrideStyle?: any;
};

const NotificationIcon = ({ hasNewMsg, overrideStyle }: PropsType) => {
  return (
    <svg
      width="30"
      height="33"
      viewBox="0 0 30 33"
      fill="none"
      style={{ ...overrideStyle }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3456 22.3162H18.2316C19.2732 22.3162 20.1176 23.1606 20.1176 24.2022C20.1176 25.2438 19.2732 26.0882 18.2316 26.0882H1.88603C0.844404 26.0882 0 25.2438 0 24.2022C0 23.1606 0.844404 22.3162 1.88603 22.3162H3.77206L4.47401 15.9987C4.7902 13.1529 7.19557 11 10.0588 11C12.9221 11 15.3274 13.1529 15.6436 15.9987L16.3456 22.3162Z"
        fill="#B0B7C3"
      />
      <path
        d="M12.5734 29.8604C12.5734 28.4716 11.4475 27.3457 10.0587 27.3457C8.66982 27.3457 7.54395 28.4716 7.54395 29.8604C7.54395 31.2492 8.66982 32.3751 10.0587 32.3751C11.4475 32.3751 12.5734 31.2492 12.5734 29.8604Z"
        fill="#B0B7C3"
      />
      {hasNewMsg && (
        <circle cx="25" cy="5" r="4.5" fill="#FF5630" stroke="white" />
      )}
    </svg>
  );
};

export default NotificationIcon;
