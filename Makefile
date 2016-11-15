all:
	@echo "Makefile: Making all targets"


install:
	@echo "Makefile: Installing stuff"
	@npm install


test:
	@echo "Makefile: Testing stuff"
	@npm test


build:
	@echo "Makefile: Deploying to AWS"
	@npm run build

