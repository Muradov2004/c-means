"use client";

import { useState } from "react";
import CalculationArea from "@/components/CalculationArea";
import Table from "@/components/Table";

export default function Home() {
  const defaultRow = { x: "", y: "", c1: "", c2: "" };

  // Initialize the table with 4 rows
  const [rows, setRows] = useState(Array(4).fill(defaultRow));
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col text-center">
        <Table rows={rows} setRows={setRows} setShow={setShow} />
        {show && <CalculationArea rows={rows} />}
      </main>
    </div>
  );
}
