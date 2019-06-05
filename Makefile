SHELL := /bin/bash

.SILENT:

ctx := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

include .jenkins/Makefile
