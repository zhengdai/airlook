module.exports = function(grunt) {
  
  // https://github.com/felixge/node-dateformat
  var dateFormat = require('dateformat'); //格式化日期

  // console.info( "dateFormat: " , dateFormat );

	var cfg = {
		// Change 'localhost' to '0.0.0.0' to access the server from outside.
		// serverHost: '10.1.77.161',
		serverHost: 'localhost',
		serverPort: 9000,
		livereload: 35729
	};  
  
  // 定义各种模块的参数，每一个成员项对应一个同名模块。
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
    ,rev: {
      options: {
        algorithm: 'md5',
        length: 8
      },
      files: {
        // src: ['src/**/*.{js,css,png,jpg}']
      }
      // assets: {
      //   files: [{
      //     src: [
      //       'img/**/*.{jpg,jpeg,gif,png}',
      //       'fonts/**/*.{eot,svg,ttf,woff}'
      //     ]
      //   }]
      // }
    }
    ,concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/jquery-1.12.1.min.js', 'src/js/idangerous.swiper.min.js', 'src/js/index.js', 'src/js/swiper-page.js'],
        dest: 'dest/libs.js'
      }
    }
    ,cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> by merlin */\n'
      },
      css: {
          // src:[ 'src/css/index.css' , 'src/css/idangerous.swiper.css' ],
          src: 'src/css/index.css' ,
          // dest:'dest/css/<%= pkg.name %>.min.css'
          dest:'dest/<%= pkg.name %>.min.css'
      }
    }
    ,uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> by merlin */\n'
      },
      build: {
        src: 'dest/libs.js', //合并后的文件
        // src: 'src/js/*.js', //这种写法也ok
        dest: 'dest/<%= pkg.name %>.min.js'  //输出的压缩完的文件，是否有问题
      }
    }

  });
  
  // 加载完成任务所需的模块
  grunt.loadNpmTasks('grunt-contrib-concat'); //合并
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify'); //压缩

  grunt.loadNpmTasks('grunt-css'); //css合并

  // grunt.loadNpmTasks('grunt-rev');

  // Default task(s).
  // grunt.registerTask('default', ['concat', 'uglify']);
  // grunt.registerTask('default', [ 'concat' , 'cssmin' , 'uglify' , 'rev' ]);

  //定义具体的任务。第一个参数为任务名，第二个参数是一个数组， 表示该任务需要依次使用的模块。
  grunt.registerTask('default', [ 'concat' , 'cssmin' , 'uglify' ]);
  
  // grunt.registerTask('default', ['uglify']);

};

    // <script type="text/javascript" src="./js/jquery-1.12.1.min.js"></script>
    // <script type="text/javascript" src="./js/idangerous.swiper.min.js"></script>
    // <script type="text/javascript" src="./js/index.js"></script>
    // <script type="text/javascript" src="./js/swiper-page.js"></script>
