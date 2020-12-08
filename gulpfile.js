const gulp = require('gulp')

const tsProject = require('gulp-typescript').createProject('tsconfig.json')

const typescript = () => gulp.src('src/**/*.ts')
  .pipe(tsProject()).js
  .pipe(gulp.dest('dist'))

const copy = () => gulp.src(['src/**/*', '!src/**/*.ts'])
  .pipe(gulp.dest('dist'))

const build = () => gulp.parallel(typescript, copy)

exports.default = build
exports.watch = () => {
  gulp.watch('src/**/*.ts', typescript)
  gulp.watch(['src/**/*', '!src/**/*.ts'], copy)

  return build()
}
