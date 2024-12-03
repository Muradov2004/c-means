"use client";

import { useState } from "react";
import CalculationArea from "@/components/CalculationArea";
import Table from "@/components/Table";
import Head from "next/head";

export default function Home() {
  const defaultRow = { x: "", y: "", c1: "", c2: "" };

  // Initialize the table with 4 rows
  const [rows, setRows] = useState(Array(4).fill(defaultRow));
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Head>
        <title>
          C-Means Clustering Calculator | Visualize Data Clusters Online
        </title>

        <meta
          name="description"
          content="Perform C-Means clustering online with this easy-to-use calculator. Ideal for data analysis, fuzzy logic, and machine learning applications."
        />

        <meta
          name="keywords"
          content="C-Means Clustering Calculator, Fuzzy C-Means Calculator, Data Clustering Online, Machine Learning Clustering Tool, Unsupervised Learning Techniques"
        />

        <meta property="og:title" content="C-Means Clustering Calculator" />
        <meta
          property="og:description"
          content="Perform and visualize C-Means clustering online. Simplify your data analysis tasks with our advanced calculator."
        />
        <meta
          property="og:url"
          content="https://muradov2004.github.io/c-means/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://muradov2004.github.io/c-means/favicon.ico"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="C-Means Clustering Calculator" />
        <meta
          name="twitter:description"
          content="Easily perform C-Means clustering with this online calculator. Designed for machine learning and data science."
        />
        <meta
          name="twitter:image"
          content="https://muradov2004.github.io/c-means/favicon.ico"
        />

        <meta name="robots" content="index, follow" />

        <link rel="canonical" href="https://muradov2004.github.io/c-means/" />
      </Head>
      <main className="flex flex-col text-center">
        <Table rows={rows} setRows={setRows} setShow={setShow} />
        {show && <CalculationArea rows={rows} />}
      </main>
    </div>
  );
}
