BIN=./node_modules/.bin
NPM=npm install --no-package-lock --no-save --no-progress --no-send-metrics --loglevel=error

.PHONY: test coverage

all: lint test coverage

check-npm:
	@command -v npm > /dev/null || (echo "Please install node/npm to get dependencies" && exit 1)

deps-lint:
	@$(NPM) eslint eslint-plugin-react

deps-test:
	@$(NPM) mocha chai enzyme enzyme-adapter-react-16 chai-enzyme@beta jsdom sinon nyc coveralls

deps-build:
	@$(NPM) babel-core babel-preset-env babel-preset-stage-0 babel-preset-react

deps-libs:
	@$(NPM) react react-dom

deps: check-npm deps-lint deps-test deps-build deps-libs

lint:
	@$(BIN)/eslint --config etc/eslint.config.js src/
	@$(BIN)/eslint --config etc/eslint.spec.config.js spec/

test:
	@NODE_PATH="./src/" $(BIN)/mocha -r spec/setup spec/**/*.js

coverage:
	@$(BIN)/nyc --reporter=lcov --reporter=text make -s test
	@$(BIN)/nyc check-coverage --lines 50 --per-file

report-coverage: coverage
	@cat ./coverage/lcov.info | $(BIN)/coveralls
