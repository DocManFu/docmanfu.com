export default {
  eleventyComputed: {
    title: (data) => data.doc.title,
    description: (data) => data.doc.description,
    schema: (data) => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.doc.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    })
  }
};
