module.exports = function(grunt) {
  // Configuration, Tasks and Plugins.
	 grunt.initConfig({
	  	pkg: grunt.file.readJSON('package.json'),
		sass: {// Task
			dist: {// Target
		    	options: {// Target options
			        // use compressed to remove white space
			        // use expanded for normal view
			        style: 'expanded'
			    }, // options
			    files: {                      
			       'css/build/main.css': 'css/scss/main.scss' 
			    } // files
		    } // dist 
    	}, // sass
		uglify: {
		    my_target: {
		      	files: {
		        	'js/build/app.min.js': ['js/app.js']
		      	}
		    }
    	}, // uglify
		watch: {
			options: {
      			livereload: true
      		}, // options
    		html: {
    			files: ['*.html']
    		}, // html
    		js: {
    			files: ['js/*.js'],
    			tasks: ['uglify']
    		}, // js
    		sass: {
    			options: {
    				livereload: false
    			},
    			files: ['css/scss/*.scss'],
    			tasks: ['sass']
    		}, // sass
			css: {
				files: ['css/build/*.css'],
				tasks: []
			} // css
		} // watch		
	});

	// DEPENDENT PLUGINS =========================/

	grunt.loadNpmTasks('grunt-contrib-watch'); 
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	// TASKS =====================================/

	grunt.registerTask('default', ['watch']);
};