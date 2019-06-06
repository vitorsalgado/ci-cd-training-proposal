# Ci&Cd Training Proposal for DevOps
[![Build Status](https://travis-ci.org/vitorsalgado/ci-cd-training-proposal.svg?branch=master)](https://travis-ci.org/vitorsalgado/ci-cd-training-proposal)  

Repository dedicated for continuous integration and continuous delivery training.

## Requirements
We propose the use of **Jenkins** as the integration tool, but you are to use other similar tools.  
This repository contains scripts to facilitate the deployment of a **local** Jenkins. These scripts are targeted for Unix systems.

### Tools
- Jenkins
- Docker

## Utilities
To execute a Jenkins in your local development environment, just run:  
```
make build-jenkins
make run-jenkins
```
For more details, check this [Makefile](./.jenkins/Makefile).

## Training
This repository contains a simple **Node.js** application which we will use to develop the proposed integrations.  
Sometimes, you may need to perform some configuration changes in this application to achieve the some training goals. For these cases, you don't need advanced **Node.js** knowledge.

### Available Tracks
- [GitFlow Automation](./.training_tracks/GITFLOW_AUTOMATION.md)
