export const video = () => {
   return app.gulp.src(`${app.path.srcFolder}/video/*.*`, {})
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "VIDEO",
            message: "Error: <%= error.message %>"
         }))
      )
      .pipe(app.gulp.dest(`${app.path.build.video}`))
}