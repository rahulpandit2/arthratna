module.exports = {
    proxy: "localhost:8000",
    files: ["views/**/*.ejs", "public/**/*.*"],
    port: 8000,
    open: false, // Prevents auto-opening of the browser
    notify: true // Show notifications in the browser
};
