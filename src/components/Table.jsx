"use client";
import { useState } from "react";
import { motion } from "motion/react";

const Table = ({ rows, setRows, setShow }) => {
  const defaultRow = { x: "", y: "", c1: "", c2: "" };
  const [error, setError] = useState(null);

  // Add a new row
  const addRow = () => setRows([...rows, defaultRow]);

  // Remove a row (minimum 4 rows)
  const removeRow = (index) => {
    if (rows.length > 4) {
      const updatedRows = rows.filter((_, i) => i !== index);
      setRows(updatedRows);
    }
  };

  // Update a cell value
  const updateCell = (index, field, value) => {
    if (!isNaN(value)) {
      const numericValue = parseFloat(value);

      if ((field === "c1" || field === "c2") && numericValue > 1) {
        setError("Values for C1 and C2 cannot exceed 1.");
        return;
      }

      setError(null);
      const updatedRows = rows.map((row, i) => {
        if (i === index) {
          if (field === "c1") {
            return {
              ...row,
              c1: numericValue,
              c2: +(1 - numericValue).toFixed(3),
            };
          } else if (field === "c2") {
            return {
              ...row,
              c2: numericValue,
              c1: +(1 - numericValue).toFixed(3),
            };
          }
          return { ...row, [field]: value };
        }
        return row;
      });
      setRows(updatedRows);
    }
  };

  const validateFields = () => {
    for (let row of rows) {
      if (Object.values(row).includes("") || row.c1 === "" || row.c2 === "") {
        setError("All fields must be filled.");
        return false;
      }
    }
    setError(null);
    return true;
  };

  const handleCalculate = () => {
    if (validateFields()) {
      setShow(false); // Temporarily hide CalculationArea
      setTimeout(() => setShow(true), 300);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        C-Means Clustering Calculator
      </h1>

      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 border border-red-300 rounded">
          {error}
        </div>
      )}

      <div className="overflow-x-auto">
        <div className="flex font-bold">
          <div className="flex-1 p-2 border border-gray-300 text-center">X</div>
          <div className="flex-1 p-2 border border-gray-300 text-center">Y</div>
          <div className="flex-1 p-2 border border-gray-300 text-center">
            C1
          </div>
          <div className="flex-1 p-2 border border-gray-300 text-center">
            C2
          </div>
          <div className="w-12 p-2"></div>
        </div>

        {rows.map((row, index) => (
          <div key={index} className="flex">
            {["x", "y", "c1", "c2"].map((field) => (
              <div
                key={field}
                className="flex-1 p-2 border border-gray-300 text-black"
              >
                <input
                  type={field === "c1" || field === "c2" ? "number" : "text"}
                  value={row[field]}
                  onChange={(e) => updateCell(index, field, e.target.value)}
                  className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                  min="0"
                  max="1"
                  step="0.01"
                />
              </div>
            ))}
            <div className="w-12 p-2 text-center">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => removeRow(index)}
                disabled={rows.length <= 4}
                className={`px-3 py-1 rounded text-white ${
                  rows.length > 4
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                X
              </motion.button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={addRow}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Row
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCalculate}
          className="w-full py-2 bg-lime-500 text-white rounded hover:bg-lime-600"
        >
          Calculate
        </motion.button>
      </div>
    </div>
  );
};

export default Table;
