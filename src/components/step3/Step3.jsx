import DynamicFormula from "./DynamicFormula";
import MembershipValueFormula from "./MembershipValueFormula";
import NewMembershipTable from "./NewMembershipTable";
const Step3 = ({ rows, C1, C2 }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Step 3</h2>
      <div className="mt-4">
        <MembershipValueFormula />

        <DynamicFormula rows={rows} C1={C1} C2={C2} />

        <NewMembershipTable rows={rows} C1={C1} C2={C2} />
      </div>
    </div>
  );
};

export default Step3;
