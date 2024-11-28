import React from "react";

const DistanceFormula = () => {
  return (
    <math className="text-lg sm:text-2xl border border-white mx-auto p-4 sm:p-10 bg-white text-black rounded-2xl">
      <msub>
        <mi>D</mi>
        <mn>i</mn>
      </msub>
      <mo>=</mo>
      <msqrt>
        <mrow>
          <msup>
            <mrow>
              <mo>(</mo>
              <msub>
                <mi>x</mi>
                <mn>2</mn>
              </msub>
              <mo>−</mo>
              <msub>
                <mi>x</mi>
                <mn>1</mn>
              </msub>
              <mo>)</mo>
            </mrow>
            <mn>2</mn>
          </msup>
          <mo>−</mo>
          <msup>
            <mrow>
              <mo>(</mo>
              <msub>
                <mi>y</mi>
                <mn>2</mn>
              </msub>
              <mo>−</mo>
              <msub>
                <mi>y</mi>
                <mn>1</mn>
              </msub>
              <mo>)</mo>
            </mrow>
            <mn>2</mn>
          </msup>
        </mrow>
      </msqrt>
    </math>
  );
};

export default DistanceFormula;
