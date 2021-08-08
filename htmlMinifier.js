const fs = require("fs");
const minify = require("html-minifier").minify;

// Take html source path as parameter and return string of minified html content
function htmlMinifier(HTMLSource) {
    const html = fs.readFileSync(HTMLSource, "utf8");    
    const result = minify(
        html,
        {
            collapseWhitespace: true,
            minifyCSS: true,
            quoteCharacter: "'"
        }
    );
    return result;
}

module.exports = htmlMinifier;
