const CentroidFormula = () => {
  return (
    <math className="text-lg sm:text-2xl border border-white mx-auto p-4 sm:p-10 bg-white text-black rounded-2xl">
      <mrow>
        <msub>
          <mi>C</mi>
          <mi>j</mi>
        </msub>
        <mo>=</mo>
        <mo>[</mo>
        <mrow>
          <mfrac>
            <mrow>
              <msubsup>
                <mo>∑</mo>
                <mrow>
                  <mi>i</mi>
                </mrow>
                <mi></mi>
              </msubsup>
              <msup>
                <mrow>
                  <mo>[</mo>
                  <msub>
                    <mi>μ</mi>
                    <mi>j</mi>
                  </msub>
                  <mo>(</mo>
                  <msub>
                    <mi>x</mi>
                    <mi>i</mi>
                  </msub>
                  <mo>)</mo>
                  <mo>]</mo>
                </mrow>
                <mi>m</mi>
              </msup>
              <mo>⋅</mo>
              <msub>
                <mi>x</mi>
                <mi>i</mi>
              </msub>
            </mrow>
            <mrow>
              <msubsup>
                <mo>∑</mo>
                <mrow>
                  <mi>i</mi>
                </mrow>
                <mi></mi>
              </msubsup>
              <msup>
                <mrow>
                  <mo>[</mo>
                  <msub>
                    <mi>μ</mi>
                    <mi>j</mi>
                  </msub>
                  <mo>(</mo>
                  <msub>
                    <mi>x</mi>
                    <mi>i</mi>
                  </msub>
                  <mo>)</mo>
                  <mo>]</mo>
                </mrow>
                <mi>m</mi>
              </msup>
            </mrow>
          </mfrac>
        </mrow>
        <mo>,</mo>
        <mrow>
          <mfrac>
            <mrow>
              <msubsup>
                <mo>∑</mo>
                <mrow>
                  <mi>i</mi>
                </mrow>
                <mi></mi>
              </msubsup>
              <msup>
                <mrow>
                  <mo>[</mo>
                  <msub>
                    <mi>μ</mi>
                    <mi>j</mi>
                  </msub>
                  <mo>(</mo>
                  <msub>
                    <mi>y</mi>
                    <mi>i</mi>
                  </msub>
                  <mo>)</mo>
                  <mo>]</mo>
                </mrow>
                <mi>m</mi>
              </msup>
              <mo>⋅</mo>
              <msub>
                <mi>y</mi>
                <mi>i</mi>
              </msub>
            </mrow>
            <mrow>
              <msubsup>
                <mo>∑</mo>
                <mrow>
                  <mi>i</mi>
                </mrow>
                <mi></mi>
              </msubsup>
              <msup>
                <mrow>
                  <mo>[</mo>
                  <msub>
                    <mi>μ</mi>
                    <mi>j</mi>
                  </msub>
                  <mo>(</mo>
                  <msub>
                    <mi>y</mi>
                    <mi>i</mi>
                  </msub>
                  <mo>)</mo>
                  <mo>]</mo>
                </mrow>
                <mi>m</mi>
              </msup>
            </mrow>
          </mfrac>
        </mrow>
        <mo>]</mo>
      </mrow>
    </math>
  );
};

export default CentroidFormula;
