import React from "react";
import Head from "next/head";

const PolicyPage = () => {
  return (
    <div className="p-8">
      <Head>
        {/* Title and Meta Description */}
        <title>Policy | No Data Collection | Noether Technologies</title>
        <meta
          name="description"
          content="Stay updated on the latest developments in tech, finance, trading, and AI with Noether Technologies. We do not collect or track any user data or online habits."
        />

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="tech updates, finance news, trading insights, AI developments, Noether Technologies, no data collection, privacy policy, user privacy"
        />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.breakthroughsdaily.com/policy" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Policy | No Data Collection | Noether Technologies"
        />
        <meta
          property="og:description"
          content="Read Noether Technologies' policy on keeping users informed with the latest in tech, finance, trading, and AI. We prioritize privacy and do not collect any user data."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.breakthroughsdaily.com/policy" />

        {/* Additional Meta Tags */}
        <meta name="author" content="Noether Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">Our Policy</h1>

      <div className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg font-medium text-gray-900">
          At Noether Technologies, we are committed to keeping you informed
          about the latest developments in technology, finance, trading, and AI.
          We do not collect, track, or use any personal data or online behavior.
          Our focus is purely on delivering the most relevant and timely
          updates in these sectors, ensuring your privacy is fully respected.
        </p>
        <p className="mt-6 text-lg font-medium text-gray-900">
          We believe in user privacy and transparency. Noether Technologies
          does not engage in any data collection practices or track your online
          habits. Your browsing experience is entirely anonymous, and we use no
          cookies or analytics to monitor your behavior.
        </p>
        <p className="mt-6 text-lg font-medium text-gray-900">
          Our sole aim is to provide quality content that keeps you informed
          about the latest trends and breakthroughs in tech, finance, trading,
          and AI.
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
