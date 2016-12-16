module.exports = function(grunt) {
    grunt.initConfig({
        browserify: {
            applicant: {
                src: [
                    'public/modules/applicant/applicant.module.js',
                    'public/modules/applicant/applicant.controller.js',
                    'public/modules/applicant/applicant.factory.js'
                ],
                dest: 'public/assets/dist/applicant.js'
            },
            core: {
                src: [
                    'public/modules/core/app/config.js',
                    'public/modules/core/app/init.js',
                    'public/modules/core/app/route.js'
                ],
                dest: 'public/assets/dist/core.js'
            },
            shared: {
                src: ['public/modules/shared/navigation/navigation.js'],
                dest: 'public/assets/dist/shared.js'
            },
            talent: {
                src: [
                    'public/modules/talent/talent.module.js',
                    'public/modules/talent/talent.controller.js',
                    'public/modules/talent/talent.factory.js'
                ],
                dest: 'public/assets/dist/talent.js'
            }
        },
        uglify: {
            applicant: {
                options: { mangle: false, compress: true },
                src: 'public/assets/dist/applicant.js',
                dest: 'public/assets/dist/applicant.min.js'
            },
            core: {
                options: { mangle: false, compress: true },
                src: 'public/assets/dist/core.js',
                dest: 'public/assets/dist/core.min.js'
            },
            shared: {
                options: { mangle: false, compress: true },
                src: 'public/assets/dist/shared.js',
                dest: 'public/assets/dist/shared.min.js'
            },
            talent: {
                options: { mangle: false, compress: true },
                src: 'public/assets/dist/talent.js',
                dest: 'public/assets/dist/talent.min.js'
            },
        },
        watch: {
            src: {
                files: ['public/modules/**/*.js'],
                tasks: ['browserify', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.registerTask('default', ['browserify', 'uglify']);
};
