const DynamicFormula = ({ rows, C1, C2 }) => {
  const m = 2; // Fuzziness parameter

  const calculate = (centroid, item) => {
    const centroidX = centroid.centroidX.toFixed(2);
    const centroidY = centroid.centroidY.toFixed(2);
    const diffX = parseFloat(centroidX) - item.x;
    const diffY = parseFloat(centroidY) - item.y;
    const result = Math.sqrt(diffX * diffX + diffY * diffY).toFixed(2);
    return result;
  };

  return (
    <>
      <h1 className="text-[#ff0055] font-bold text-2xl">Cluster1</h1>
      {rows.map((row, index) => {
        const value1 = calculate(C1, row);
        const value2 = calculate(C2, row);
        const result = 1 / value1 / (1 / value1 + 1 / value2);
        return (
          <math
            display="block"
            className="text-2xl overflow-x-auto h-[150px] mb-2"
            key={index}
          >
            <msub>
              <mi>μ</mi>
              <mrow>
                <mi>1</mi>
                <mi>{index + 1}</mi>
              </mrow>
            </msub>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msub>
                        <mi>d</mi>
                        <mrow>
                          <mi>1</mi>
                          <mi>{index + 1}</mi>
                        </mrow>
                      </msub>
                    </mfrac>
                    <mo>)</mo>
                  </mrow>
                  <mfrac>
                    <mn>1</mn>
                    <mrow>
                      <mo>(</mo>
                      <mi>{m}</mi>
                      <mo>-</mo>
                      <mn>1</mn>
                      <mo>)</mo>
                    </mrow>
                  </mfrac>
                </msup>
              </mrow>
              <mrow>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msub>
                        <mi>d</mi>
                        <mrow>
                          <mi>1</mi>
                          <mi>{index + 1}</mi>
                        </mrow>
                      </msub>
                    </mfrac>
                    <mo>)</mo>
                  </mrow>
                  <mfrac>
                    <mn>1</mn>
                    <mrow>
                      <mo>(</mo>
                      <mi>{m}</mi>
                      <mo>-</mo>
                      <mn>1</mn>
                      <mo>)</mo>
                    </mrow>
                  </mfrac>
                </msup>
                <mo>+</mo>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msub>
                        <mi>d</mi>
                        <mrow>
                          <mi>2</mi>
                          <mi>{index + 1}</mi>
                        </mrow>
                      </msub>
                    </mfrac>
                    <mo>)</mo>
                  </mrow>
                  <mfrac>
                    <mn>1</mn>
                    <mrow>
                      <mo>(</mo>
                      <mi>{m}</mi>
                      <mo>-</mo>
                      <mn>1</mn>
                      <mo>)</mo>
                    </mrow>
                  </mfrac>
                </msup>
              </mrow>
            </mfrac>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <mfrac>
                  <mn>1</mn>
                  <mn>{value1}</mn>
                </mfrac>
              </mrow>
              <mrow>
                <mfrac>
                  <mn>1</mn>
                  <mn>{value1}</mn>
                </mfrac>
                <mo>+</mo>
                <mfrac>
                  <mn>1</mn>
                  <mn>{value2}</mn>
                </mfrac>
              </mrow>
            </mfrac>
            <mo>=</mo>
            <mn>{result.toFixed(1)}</mn>
          </math>
        );
      })}
      <h1 className="text-[#ff0055] font-bold text-2xl">Cluster2</h1>
      {rows.map((row, index) => {
        const value1 = calculate(C1, row);
        const value2 = calculate(C2, row);
        const result = 1 / value2 / (1 / value1 + 1 / value2);
        return (
          <math
            display="block"
            className="text-2xl overflow-x-auto h-[150px] mb-2"
            key={index}
          >
            <msub>
              <mi>μ</mi>
              <mrow>
                <mi>2</mi>
                <mi>{index + 1}</mi>
              </mrow>
            </msub>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msub>
                        <mi>d</mi>
                        <mrow>
                          <mi>2</mi>
                          <mi>{index + 1}</mi>
                        </mrow>
                      </msub>
                    </mfrac>
                    <mo>)</mo>
                  </mrow>
                  <mfrac>
                    <mn>1</mn>
                    <mrow>
                      <mo>(</mo>
                      <mi>{m}</mi>
                      <mo>-</mo>
                      <mn>1</mn>
                      <mo>)</mo>
                    </mrow>
                  </mfrac>
                </msup>
              </mrow>
              <mrow>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msub>
                        <mi>d</mi>
                        <mrow>
                          <mi>1</mi>
                          <mi>{index + 1}</mi>
                        </mrow>
                      </msub>
                    </mfrac>
                    <mo>)</mo>
                  </mrow>
                  <mfrac>
                    <mn>1</mn>
                    <mrow>
                      <mo>(</mo>
                      <mi>{m}</mi>
                      <mo>-</mo>
                      <mn>1</mn>
                      <mo>)</mo>
                    </mrow>
                  </mfrac>
                </msup>
                <mo>+</mo>
                <msup>
                  <mrow>
                    <mo>(</mo>
                    <mfrac>
                      <mn>1</mn>
                      <msub>
                        <mi>d</mi>
                        <mrow>
                          <mi>2</mi>
                          <mi>{index + 1}</mi>
                        </mrow>
                      </msub>
                    </mfrac>
                    <mo>)</mo>
                  </mrow>
                  <mfrac>
                    <mn>1</mn>
                    <mrow>
                      <mo>(</mo>
                      <mi>{m}</mi>
                      <mo>-</mo>
                      <mn>1</mn>
                      <mo>)</mo>
                    </mrow>
                  </mfrac>
                </msup>
              </mrow>
            </mfrac>
            <mo>=</mo>
            <mfrac>
              <mrow>
                <mfrac>
                  <mn>1</mn>
                  <mn>{value2}</mn>
                </mfrac>
              </mrow>
              <mrow>
                <mfrac>
                  <mn>1</mn>
                  <mn>{value1}</mn>
                </mfrac>
                <mo>+</mo>
                <mfrac>
                  <mn>1</mn>
                  <mn>{value2}</mn>
                </mfrac>
              </mrow>
            </mfrac>
            <mo>=</mo>
            <mn>{result.toFixed(1)}</mn>
          </math>
        );
      })}
    </>
  );
};

export default DynamicFormula;
