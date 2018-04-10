// 在nodejs环境下运行的js文件
// 按照nodejs的语法使用

// 引用模块: require();  得到一个对象/函数
// gulp,gulp-sass

let gulp = require('gulp');//{task(),}
let sass = require('gulp-sass');//fn


// sass->css
gulp.task('compileSass',function(){
    // 先查找sass文件所在目录
    gulp.src('./src/sass/*.scss') // 返回文件流（液体，文件在内存中的状态）

    // scss->css
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))

    // 输出到硬盘
    .pipe(gulp.dest('./src/css/'))
});


// 监听文件修改，自动执行编译任务
gulp.task('jtSass',function(){
    gulp.watch('./src/sass/*.scss',['compileSass'])
})

gulp.task('default',function(){
    // console.log(gulp)
    gulp.src('./src/lib/*.scss')
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'))
});

// 自动刷新服务器
let browserSync = require('browser-sync');

// 静态服务器
gulp.task('server',()=>{
    browserSync({
        // 服务器路径
        // server:'./src/',

        // 代理服务器
        proxy:'http://localhost:12315',

        // 端口
        port:156,

        // 监听文件修改，自动刷新
        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    });

    // 监听sass文件修改，并自动编译
    gulp.watch('./src/sass/*.scss',['compileSass'])
})