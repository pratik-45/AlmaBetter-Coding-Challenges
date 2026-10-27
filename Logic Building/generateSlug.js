function generateSlug(title) {
    // Convert the title to lowercase
    return title.toLowerCase().replaceAll(" ", "-") + ".com";
}

module.exports = { generateSlug };

console.log(generateSlug("Hello World")); // Output: hello-world.com
console.log(generateSlug("AlmaBetter Web Dev")); // Output: almabetter-web-dev.com