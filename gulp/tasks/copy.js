export const copyvideo = () => {
	return app.gulp.src(app.path.src.video)
		.pipe(app.gulp.dest(app.path.build.video))
}
export const copyfiles = () => {
	return app.gulp.src(app.path.src.files)
		.pipe(app.gulp.dest(app.path.build.files))
}