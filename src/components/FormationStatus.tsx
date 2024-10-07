import React, { memo } from "react";

const Button = React.lazy(() => import("./general/Button"));

const MemoFormationStatus = () => {
  return (
    <div className="p-6 grid gap-y-5 rounded-3xl border border-gray-200 shadow-formationStatus">
      <div className="grid gap-y-3">
        <h2 className="text-gray-900 text-lg sm:text-2xl leading-6 font-bold">
          Formation status
        </h2>
        <span className="text-gray-900 text-base leading-4 font-bold">
          In progress
        </span>
      </div>
      <div className="w-full grid gap-6">
        <div className="bg-gray-300 h-5 rounded-full relative">
          <div className="bg-brand-700 rounded-full absolute left-0 inset-y-0 w-3/5" />
        </div>
        <div className="grid gap-y-2">
          <span className="text-gray-900 text-base leading-4 font-bold">
            Estimated processing
          </span>
          <span className="text-gray-500 text-base leading-4 font-bold">
            4-5 business days
          </span>
        </div>
        <Button label="View status" btnClass="primary" />
      </div>
    </div>
  );
};

const FormationStatus = memo(MemoFormationStatus);

export default FormationStatus;
