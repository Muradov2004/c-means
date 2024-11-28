import CentroidFormula from "./CentroidFormula";
import DynamicFormula from "./DynamicFormula";

const Step1 = ({ rows, C1, C2 }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Step 1</h2>
      <div className="mt-4">
        <CentroidFormula />
        <div className="my-10 flex flex-col gap-8">
          <DynamicFormula rows={rows} c1={true} result={C1} />

          <DynamicFormula rows={rows} c1={false} result={C2} />
        </div>
      </div>
    </div>
  );
};

export default Step1;
