export default {
  eleventyComputed: {
    title: (data) => data.platform.title,
    description: (data) => data.platform.description,
    schema: (data) => ({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: data.platform.title,
      description: data.platform.description,
      author: { "@type": "Organization", name: "DocManFu" }
    })
  }
};
