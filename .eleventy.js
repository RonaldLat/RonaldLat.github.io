module.exports = {
    dir: {
        output: "blog",
        input: "blog-dev",
        layout: "blog-dev/_includes"

    },
    templateFormats: ["md", "css", "njk", "js", "jpg", "png", "svg", "webp"],
};

// module.exports = (function (eleventyConfig) {
//     eleventyConfig.addPassThroughCopy("css")
//     return {
//         dir: {
//             output: "blog",
//             input: "posts"
//         },
//         templateFormats: ["md", "css"]

//     }
// })
