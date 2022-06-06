const Image = require('@11ty/eleventy-img');

async function imageShortcode(src, alt, sizes) {
    let metadata = await Image(src, {
        widths: [null],
        formats: ["jpeg"],
        urlPath: "/images/",
        outputDir: "./dist/images/",
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline"
    });
}


module.exports = function (config) {
    config.addPassthroughCopy('src/css');
    config.addPassthroughCopy('src/images');
    config.addWatchTarget('src/css');
    config.addPassthroughCopy("src/js");
    config.addNunjucksAsyncShortcode("image", imageShortcode);
    return {
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };
};

