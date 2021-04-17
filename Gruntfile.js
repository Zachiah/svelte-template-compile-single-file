module.exports = function (grunt) {
    grunt.initConfig({
        assets_inline: {
            options: {
                jsDir: "public",
                cssDir: "public",
            },
            all: {
                files: {
                    'output/index.html': 'public/index.html',
                },
            },
        }
    });
    grunt.loadNpmTasks('grunt-assets-inline');
    grunt.registerTask('default',['assets_inline']);
}