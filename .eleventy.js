module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  return {
    pathPrefix: "/portfolio/",
    dir: {
      input: "src",
      includes: "includes",
      output: "_site"
    }
  };
};