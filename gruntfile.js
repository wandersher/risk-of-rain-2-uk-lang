const dest = process.env.DEST || "dist";

console.log("dest", dest);

module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        src: "src/**/*",
        dest,
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-copy");
};
