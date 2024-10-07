import { memo } from "react";

const MemoLoading = ({ children }: LoadingProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {children}
    </div>
  );
};

const Loading = memo(MemoLoading);

export default Loading;
