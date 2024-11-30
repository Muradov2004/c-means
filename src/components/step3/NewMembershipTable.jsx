const NewMembershipTable = ({ rows, C1, C2 }) => {
  const calculate = (centroid, item) => {
    const centroidX = centroid.centroidX.toFixed(2);
    const centroidY = centroid.centroidY.toFixed(2);
    const diffX = parseFloat(centroidX) - item.x;
    const diffY = parseFloat(centroidY) - item.y;
    const result = Math.sqrt(diffX * diffX + diffY * diffY).toFixed(2);
    return result;
  };

  return (
    <div className="my-5  sm:mx-[30%]">
      <div className="overflow-x-auto">
        <div className="flex font-bold bg-[#1f1f1f] text-white">
          <div className="flex-1 p-2 border border-gray-300 text-center">X</div>
          <div className="flex-1 p-2 border border-gray-300 text-center">Y</div>
          <div className="flex-1 p-2 border border-gray-300 text-center">
            C1
          </div>
          <div className="flex-1 p-2 border border-gray-300 text-center">
            C2
          </div>
        </div>

        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex ${index % 2 ? "bg-[#cbcbcb]" : "bg-[#e7e7e7]"} `}
          >
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {row.x}
            </div>
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {row.y}
            </div>
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {(
                1 /
                calculate(C1, row) /
                (1 / calculate(C1, row) + 1 / calculate(C2, row))
              ).toFixed(1)}
            </div>
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {(
                1 /
                calculate(C2, row) /
                (1 / calculate(C1, row) + 1 / calculate(C2, row))
              ).toFixed(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMembershipTable;
