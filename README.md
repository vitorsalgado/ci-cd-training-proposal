<a href="https://trello.com/b/ce1BS8Oh"><img src=".github/logo.png" width="180px" align="right" /></a>

# CI / CD Training
[![Build Status](https://travis-ci.org/vitorsalgado/ci-cd-training-proposal.svg?branch=master)](https://travis-ci.org/vitorsalgado/ci-cd-training-proposal)  

This repository is dedicated to facilitate practicing continuous integration and deployment. 
It comes with scripts to easily setup a **Jenkins** locally with Docker and a simple applications **already developed**.  This way, you can focus in the automation. 
I recommend you to use this [Trello](https://trello.com/b/ce1BS8Oh) to guide you through your training.  
This repository also contains a [Github Project](https://github.com/vitorsalgado/ci-cd-training/projects/2) and [Issues](https://github.com/vitorsalgado/ci-cd-training/issues) to guide you in more practical activities.

## How To

### Starting
First, **Fork** this repository. This way, you can connect any automation tool with your own repository.  

### Basic Requirements
- [Jenkins](https://jenkins.io/)
- [Docker](https://docs.docker.com/)
- Any IDE or Text Editor

> Other requirements may apply for some trainings and/or depending of your solution.

### Traininig Application
This repository contains a simple **Node.js** application which we will use to develop the proposed integrations.

### Jenkins
We propose the use of **Jenkins** as the automation tool, but you are free to use any other similar tools.  
This repository contains scripts to facilitate the deployment of a **local Jenkins**. The default **Port** for Jenkins is **8080**. You can change this in this [Makefile](./.jenkins/Makefile).
These scripts won't work in **Windows**. In this case, you will need to install it manually.  
To execute a Jenkins in your local development environment, navigate to the folder **.jenkins** and execute the following commands:  
```
make build-jenkins
make run-jenkins
```
For more details, check this [Makefile](./.jenkins/Makefile).  

## Trainings
- [GitFlow Automation](./.training_tracks/GITFLOW_AUTOMATION.md)

## Tips
- [Using a Jenkinsfile](https://jenkins.io/doc/book/pipeline/jenkinsfile/)
- [Creating your first Pipeline](https://jenkins.io/doc/pipeline/tour/hello-world/)
- [Pipeline Syntax](https://jenkins.io/doc/book/pipeline/syntax/)
