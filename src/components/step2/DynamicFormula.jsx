const DynamicFormula = ({ rows, C1, C2 }) => {
  // Helper function to compute and render distance calculations
  const renderDistance = (centroid, label) => {
    const centroidX = centroid.centroidX.toFixed(2);
    const centroidY = centroid.centroidY.toFixed(2);

    return (
      <div>
        <h1 className="text-[#ff0055] font-bold text-2xl">{label}</h1>
        {rows.map((item, index) => {
          const diffX = parseFloat(centroidX) - item.x;
          const diffY = parseFloat(centroidY) - item.y;
          const result = Math.sqrt(diffX * diffX + diffY * diffY).toFixed(2);

          return (
            <math display="block" className="text-md sm:text-xl overflow-x-auto" key={`${label}-${index}`}>
              <mrow>
                <mrow>
                  <mo>(</mo>
                  <mi>{item.x}</mi>
                  <mo>,</mo>
                  <mi>{item.y}</mi>
                  <mo>)</mo>
                </mrow>
                <mrow>
                  <mo>(</mo>
                  <mi>{centroidX}</mi>
                  <mo>, </mo>
                  <mi>{centroidY}</mi>
                  <mo>)</mo>
                </mrow>
              </mrow>
              <mo>=</mo>
              <msqrt className="py-3">
                <mrow className="mt-3">
                  <msup>
                    <mrow>
                      <mo>(</mo>
                      <mn>{centroidX}</mn>
                      <mo>−</mo>
                      <mn>{item.x}</mn>
                      <mo>)</mo>
                    </mrow>
                    <mn>2</mn>
                  </msup>
                  <mo>+</mo>
                  <msup>
                    <mrow>
                      <mo>(</mo>
                      <mn>{centroidY}</mn>
                      <mo>−</mo>
                      <mn>{item.y}</mn>
                      <mo>)</mo>
                    </mrow>
                    <mn>2</mn>
                  </msup>
                </mrow>
              </msqrt>
              <mo>=</mo>
              <mi>{result}</mi>
            </math>
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-4">
      {renderDistance(C1, "Centroid 1")}
      {renderDistance(C2, "Centroid 2")}
    </div>
  );
};

export default DynamicFormula;
