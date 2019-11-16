module.exports = function (grunt) {
    grunt.initConfig({
        csslint: {
            strict: {
                options: {
                    import: 2
                },
                src: ['./css/*.css']
            }
        },
        htmllint: {
            all: ['index.html']
        }
    });
    grunt.loadNpmTasks('grunt-html');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    grunt.registerTask('default', ['htmllint:all','csslint']);
}