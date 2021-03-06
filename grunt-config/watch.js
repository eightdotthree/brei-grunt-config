module.exports = function(grunt, options){
  var yeoman = options.yeoman;
  return {
    compass: {
      files: [yeoman.app + '/sass/**/*.{scss,sass}',
        yeoman.app + '/img/**/*.png'
      ],
      tasks: ['compass:server', 'autoprefixer']
    },
    styles: {
      files: [yeoman.app + '/css/**/*.css'],
      tasks: ['copy:styles', 'autoprefixer']
    },
    assemble: {
      files: [yeoman.app + '/assemble/**/*.hbs'],
      tasks: ['clean:assemble', 'assemble']
    },
    livereload: {
      options: {
        livereload: 35729
      },
      files: [yeoman.app + '/*.html',
        yeoman.app + '/modules/**/*.html',
        '.tmp/css/**/*.css',
        '{.tmpyeoman.app + ,}/js/**/*.js',
        yeoman.app + '/img/**/*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    },
    execute: {
      files: [yeoman.app + '/assemble/modules/*.hbs',
        yeoman.app + '/assemble/partials/*.hbs'
      ],
      tasks: ['execute:target']
    }
  }
};