module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			options: {
				includePaths: [
					'bower_components/bourbon/app/assets/stylesheets'
				]
			},
			dist: {
				options: {
						outputStyle: 'expanded'
				},
				files: {
					'assets/css/main.css': 'sass/main.sass'
				}
			}
		}, // END SASS
		watch: {
			//grunt: { files: ['Gruntfile.js'] },

			sass: {
				files: ['sass/**/*.sass', 'sass/**/*.scss'],
				tasks: ['sass']
			}
		}, // END WATCH
		uglify: {
			build: {
				options: {
					beautify: {
						width: 80,
						beautify: true
					}
				},
				files: {
					/*'build/all.min.js': ['js/jquery-1.11.2.min.js', 'js/*.js'],*/
					'assets/js/fastclick.min.js': ['js/fastclick.js'],
					'assets/js/navigation.min.js': ['js/navigation.js']
				}
			}
		} // END UGLIFY
	});

grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.loadNpmTasks('grunt-contrib-uglify');
//grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('build', ['sass']);
grunt.registerTask('default', ['build','watch']);

};