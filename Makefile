CI_BRANCH ?= test
GIT_DEPLOY_BRANCH ?= $(CI_BRANCH)
GIT_REMOTE_URL ?= sails-frontend@$(GIT_DEPLOY_BRANCH).stage.eversport.at:~/git

all:
	@echo "Makefile: Making all targets"


install:
	@echo "Makefile: Installing stuff"
	@npm install


test:
	@echo "Makefile: Testing stuff"
	@npm test


deploy:
	@echo "Makefile: Pushing branch: '$(GIT_DEPLOY_BRANCH)' to server: '$(GIT_REMOTE_URL)'."
	@git push $(GIT_REMOTE_URL) $(GIT_DEPLOY_BRANCH)

