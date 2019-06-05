ctx := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))
jenkins := jenkins-devops
data := jenkins-devops-data
log := jenkins-devops-log

build-jenkins:
	@docker build -t $(jenkins) $(ctx)
create-data:
	@docker volume create $(log)
	@docker volume create $(data)
run-jenkins: create-data
	@docker run -p 8080:8080 -p 50000:50000 --name=$(jenkins) --mount source=$(log),target=/var/log/jenkins --mount source=$(data),target=/var/jenkins_home -d $(jenkins)
stop-jenkins:
	-docker stop $(jenkins)
clean-jenkins:	stop-jenkins
	-docker rm $(jenkins)
clean-jenkins-data:  clean-jenkins
	-docker volume rm $(log)
	-docker volume rm $(data)
