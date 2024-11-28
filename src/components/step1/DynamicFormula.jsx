const DynamicFormula = ({ rows, result, c1 = true }) => {
  return (
    <math display="block" className="text-xl break-words overflow-x-auto mx-4">
      <mrow>
        <msub>
          {c1 ? (
            <>
              <mi>C</mi>
              <mn>1</mn>
            </>
          ) : (
            <>
              <mi>C</mi>
              <mn>2</mn>
            </>
          )}
        </msub>
        <mo>=</mo>
        <mo>[</mo>
        <mfrac>
          <mrow>
            {rows.map((item, index) => {
              const value = item.x;
              const constant = c1 ? item.c1 : item.c2;
              return (
                <mrow key={index}>
                  <mi>{value}</mi>
                  <mo>⋅</mo>
                  <msup>
                    <mrow>
                      <mi>{constant}</mi>
                    </mrow>
                    <mi>{2}</mi>
                  </msup>
                  {index < rows.length - 1 && <mo>+</mo>}
                </mrow>
              );
            })}
          </mrow>
          <mrow>
            {rows.map((item, index) => {
              const constant = c1 ? item.c1 : item.c2;
              return (
                <mrow key={index}>
                  <msup>
                    <mrow>
                      <mi>{constant}</mi>
                    </mrow>
                    <mi>{2}</mi>
                  </msup>
                  {index < rows.length - 1 && <mo>+</mo>}
                </mrow>
              );
            })}
          </mrow>
        </mfrac>
        <mo>,</mo>
        <mfrac>
          <mrow>
            {rows.map((item, index) => {
              const value = item.y;
              const constant = c1 ? item.c1 : item.c2;
              return (
                <mrow key={index}>
                  <mi>{value}</mi>
                  <mo>⋅</mo>
                  <msup>
                    <mrow>
                      <mi>{constant}</mi>
                    </mrow>
                    <mi>{2}</mi>
                  </msup>
                  {index < rows.length - 1 && <mo>+</mo>}
                </mrow>
              );
            })}
          </mrow>
          <mrow>
            {rows.map((item, index) => {
              const constant = c1 ? item.c1 : item.c2;
              return (
                <mrow key={index}>
                  <msup>
                    <mrow>
                      <mi>{constant}</mi>
                    </mrow>
                    <mi>{2}</mi>
                  </msup>
                  {index < rows.length - 1 && <mo>+</mo>}
                </mrow>
              );
            })}
          </mrow>
        </mfrac>
        <mo>]</mo>

        <mo>=</mo>
        <mo>[</mo>
        <mfrac>
          <mrow>
            <mi>{result.numeratorX.toFixed(2)}</mi>
          </mrow>
          <mrow>
            <mi>{result.denominator.toFixed(2)}</mi>
          </mrow>
        </mfrac>
        <mo>,</mo>
        <mfrac>
          <mrow>
            <mi>{result.numeratorY.toFixed(2)}</mi>
          </mrow>
          <mrow>
            <mi>{result.denominator.toFixed(2)}</mi>
          </mrow>
        </mfrac>
        <mo>]</mo>

        <mo>=</mo>
        <mo>[</mo>
        <mi>{result.centroidX.toFixed(2)}</mi>
        <mo>,</mo>
        <mi>{result.centroidY.toFixed(2)}</mi>
        <mo>]</mo>
      </mrow>
    </math>
  );
};

export default DynamicFormula;
