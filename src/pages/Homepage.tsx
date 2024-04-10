import React from "react";
import Header from "@/components/homepage_sections/Header";
import Layout from "@/components/Layout";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        <Header />
      </Layout>
    </div>
  );
};

export default Homepage;
