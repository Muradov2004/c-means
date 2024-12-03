import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "C-Means Clustering Calculator",
  description: "By this website u can calculate c-Means clustering tables",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
