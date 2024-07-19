import React from "react";

export default function ArticleContent() {
  return (
    <div className="p-6">
      <h1 className="hidden text-3xl font-bold lg:flex">Enterprise Climate</h1>
      <p className="mt-2 hidden text-gray-600 lg:flex">
        The industry is flush with venture capital funding, and startups in the
        space can command massive valuation premiums.
      </p>
      <div className="mt-0 lg:mt-4">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*owaiVANQZZrYYlrO"
          alt="Market Map"
          width={800}
          height={400}
          className="w-full"
        />
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Enterprise Climate Software</h2>
        <p className="mt-2 text-gray-600">
          In the latter half of the last decade, companies have faced mounting
          pressure from investors, activists, and regulators to set ambitious
          climate goals and execute accordingly. Climate programs are becoming
          mission-critical to company operations regardless of industry and
          size. This trend will require enterprise software solutions to provide
          detailed analytics about emissions, supply chain, and product
          manufacturing. Startups in the B2B Climate SaaS space will provide
          services that become essential to company operations and unlock
          recurring revenues with unprecedented efficiency.
        </p>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Background and Context</h2>
        <p className="mt-2 text-gray-600">
          B2B Climate SaaS is a subset of ClimateTech that covers the horizontal
          of enterprise software products built to handle various
          climate-related processes for their customers. Users leverage these
          platforms to quantify, analyze, predict, and reduce climate factors
          such as emissions. Best-in-class companies in this industry tend to
          offer platforms that serve as a single source of truth and are
          mission-critical systems of records for their employees. For instance,
          accountants might heavily rely on carbon accounting software,
          embedding it into their daily workflows.
        </p>
      </div>
    </div>
  );
}
