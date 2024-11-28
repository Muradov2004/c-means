const CentroidTable = ({ rows, C1, C2 }) => {
  const calculate = (centroid, item) => {
    const centroidX = centroid.centroidX.toFixed(2);
    const centroidY = centroid.centroidY.toFixed(2);
    const diffX = parseFloat(centroidX) - item.x;
    const diffY = parseFloat(centroidY) - item.y;
    const result = Math.sqrt(diffX * diffX + diffY * diffY).toFixed(2);
    return result;
  };

  return (
    <div className="my-5  sm:mx-[20%]">
      <div className="overflow-x-auto">
        <div className="flex font-bold">
          <div className="flex-1 p-2 bg-[#682236] text-center">Cluster1</div>
          <div className="flex-1 p-2 bg-[#1f1f1f] text-center">Cluster2</div>
        </div>
        <div className="flex font-bold bg-[#cbcbcb] text-black">
          <div className="flex-1 p-2 border border-gray-300 text-center">
            Datapoint
          </div>
          <div className="flex-1 p-2 border border-gray-300 text-center">
            Distance
          </div>
          <div className="flex-1 p-2 border border-gray-300 text-center">
            Datapoint
          </div>
          <div className="flex-1 p-2 border border-gray-300 text-center">
            Distance
          </div>
        </div>

        {rows.map((row, index) => (
          <div
            key={index}
            className={`flex ${index % 2 ? "bg-[#cbcbcb]" : "bg-[#e7e7e7]"} `}
          >
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {"("}
              {row.x},{row.y}
              {")"}
            </div>
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {calculate(C1, row)}
            </div>
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {"("}
              {row.x},{row.y}
              {")"}
            </div>
            <div className="flex-1 p-2 border border-gray-300 text-black">
              {calculate(C2, row)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CentroidTable;
