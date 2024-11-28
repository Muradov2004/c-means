import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";

const CalculationArea = ({ rows }) => {
  const calculateCentroidWithSteps = (rows, key) => {
    let numeratorX = 0;
    let numeratorY = 0;
    let denominator = 0;

    rows.forEach((item) => {
      const weightSquared = Math.pow(item[key], 2);
      numeratorX += item.x * weightSquared;
      numeratorY += item.y * weightSquared;
      denominator += weightSquared;
    });

    return {
      centroidX: numeratorX / denominator,
      centroidY: numeratorY / denominator,
      numeratorX,
      numeratorY,
      denominator,
    };
  };

  // Calculate centroids
  const C1 = calculateCentroidWithSteps(rows, "c1");
  const C2 = calculateCentroidWithSteps(rows, "c2");

  return (
    <div className="mt-4 p-6 w-full">
      <Step1 rows={rows} C1={C1} C2={C2} />
      <Step2 rows={rows} C1={C1} C2={C2} />
      <Step3 />
    </div>
  );
};

export default CalculationArea;