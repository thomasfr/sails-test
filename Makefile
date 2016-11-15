all:
	@echo "Makefile: Making all targets"


install:
	@echo "Makefile: Installing stuff"
	@npm install


test:
	@echo "Makefile: Testing stuff"
	@npm test


build:
	@echo "Makefile: Creating build artifact"
	@-rm -r node_modules
	@NODE_ENV=production npm install
	@NODE_ENV=production npm run build

