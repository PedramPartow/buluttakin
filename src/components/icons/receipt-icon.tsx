const ReceiptIcon = ({ width = "24", height = "24", fill = "white" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 23.25C11.22 23.25 10.46 22.85 9.94 22.15L8.93 20.8C8.72 20.52 8.44 20.36 8.14 20.34C7.84 20.33 7.54 20.46 7.3 20.71L6.73 20.2L7.28 20.71C5.84 22.25 4.73 22.13 4.2 21.92C3.66 21.71 2.75 21.02 2.75 18.8V7.54C2.75 3.1 4.03 1.75 8.22 1.75H15.78C19.97 1.75 21.25 3.1 21.25 7.54V18.8C21.25 21.01 20.34 21.7 19.8 21.92C19.27 22.13 18.17 22.25 16.72 20.71C16.48 20.45 16.19 20.31 15.87 20.34C15.57 20.36 15.28 20.52 15.07 20.8L14.06 22.15C13.54 22.85 12.78 23.25 12 23.25ZM8.08 18.83C8.12 18.83 8.17 18.83 8.21 18.83C8.95 18.87 9.65 19.26 10.12 19.89L11.13 21.24C11.62 21.89 12.37 21.89 12.86 21.24L13.87 19.89C14.35 19.26 15.04 18.87 15.79 18.83C16.53 18.79 17.27 19.1 17.81 19.68C18.57 20.49 19.07 20.59 19.24 20.52C19.48 20.42 19.74 19.84 19.74 18.8V7.54C19.74 3.93 19.11 3.25 15.77 3.25H8.22C4.88 3.25 4.25 3.93 4.25 7.54V18.8C4.25 19.85 4.51 20.43 4.75 20.52C4.92 20.59 5.42 20.49 6.18 19.68C6.72 19.13 7.39 18.83 8.08 18.83Z"
        fill={fill}
      />
      <path
        d="M16 8.25H8C7.59 8.25 7.25 7.91 7.25 7.5C7.25 7.09 7.59 6.75 8 6.75H16C16.41 6.75 16.75 7.09 16.75 7.5C16.75 7.91 16.41 8.25 16 8.25Z"
        fill={fill}
      />
      <path
        d="M15 12.25H9C8.59 12.25 8.25 11.91 8.25 11.5C8.25 11.09 8.59 10.75 9 10.75H15C15.41 10.75 15.75 11.09 15.75 11.5C15.75 11.91 15.41 12.25 15 12.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default ReceiptIcon;
