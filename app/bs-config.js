module.exports = {
	"files": "./dist/**/*.css, ./dist/**/*.js, ./dist/**/*.html",
  "proxy": {
    target: 'nginx:80',
  },
  "server": false,
	"port": 3000,
  "ui": false
}
