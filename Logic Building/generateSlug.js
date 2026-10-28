function generateSlug(title) {
    // Convert the title to lowercase
    const lowerTitle = title.toLowerCase();

    // Replace spaces with hyphens and add .com
    const slug = lowerTitle.replaceAll(" ", "-") + ".com";

    return slug;
}

// Export the function for testing
module.exports = { generateSlug };

// Test cases
console.log(generateSlug("Hello World"));        // hello-world.com
console.log(generateSlug("AlmaBetter Web Dev")); // almabetter-web-dev.com
console.log(generateSlug("JavaScript Basics"));  // javascript-basics.com
