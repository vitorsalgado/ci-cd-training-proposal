# Ci & Cd Training
[![Build Status](https://travis-ci.org/vitorsalgado/ci-cd-training-proposal.svg?branch=master)](https://travis-ci.org/vitorsalgado/ci-cd-training-proposal)  

Repository dedicated for continuous integration and continuous delivery training.

## Basic Requirements
- [Jenkins](https://jenkins.io/)
- [Docker](https://docs.docker.com/)
- Any IDE or Text Editor

> Other requirements may apply for some trainings and/or depending of your solution.

## How To

### Starting
First, **Fork** this repository. This way, you can connect any automation tool with your own repository.  

### Traininig Application
This repository contains a simple **Node.js** application which we will use to develop the proposed integrations. 
Sometimes, you may need to perform some configuration changes in this application to achieve the some training goals. For these cases, you don't need advanced **Node.js** knowledge.  

### Jenkins
We propose the use of **Jenkins** as the automation tool, but you are free to use other similar tools.  
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
