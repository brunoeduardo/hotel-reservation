module.exports = function( grunt ) {
 
  grunt.initConfig({
    // Tasks que o Grunt deve executar
      
	//min js
      uglify : {
      options : {
        mangle : false
      },
 
      my_target : {
        files : {
          'js/main.js' : [ 'js/lib/jquery-2.1.3.min.js' , 'js/lib/jquery.mobile-1.4.5.min.js' , 'js/lib/mask_Plugin.js']
        }
      }
    }, 

    //hintjs
    jshint: {
    all: ['Gruntfile.js', 'js/mobile.js']
  },

  //cssmin
	cssmin: {
	  options: {
	    shorthandCompacting: false,
	    roundingPrecision: -1
	  },
	  target: {
	    files: {
	      'style/style.css': ['style/assets/jquery.mobile-1.4.5.min.css', 'style/assets/styleMobile.css']
	    }
	  }
	},
    
    // watch
    watch : {
      dist : {
        files : [
          'js/lib', 'js/mobile.js'
        ],
        tasks : ['jshint' , 'uglify' , 'cssmin']
      }
    } 

	});
  
   // Plugins Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-jshint' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-contrib-watch'  );
 
  // Tasks
   grunt.registerTask( 'go', [ 'uglify'] );
  // Tasks Watch
   grunt.registerTask( 'w', [ 'watch' ] );

};