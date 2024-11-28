import React from "react";
import DistanceFormula from "./DistanceFormula";
import DynamicFormula from "./DynamicFormula";
import CentroidTable from "./CentroidTable";

const Step2 = ({ rows, C1, C2 }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Step 2</h2>
      <div className="mt-4">
        <DistanceFormula />

        <DynamicFormula rows={rows} C1={C1} C2={C2} />

        <CentroidTable rows={rows} C1={C1} C2={C2} />
      </div>
    </div>
  );
};

export default Step2;
