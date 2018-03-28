deps:
	@command -v npm > /dev/null || (echo "Please install node/npm to get dependencies" && exit 1)
	@npm install --no-package-lock --no-save --loglevel=error \
		eslint \
		eslint-plugin-react

lint:
	@./node_modules/.bin/eslint --config etc/eslint.config.js src/ spec/
