SHELL := /bin/sh
.PHONY: install dev build test docker-build
install:
	npm ci
dev:
	npm run dev
build:
	npm run build
test:
	npm test
docker-build:
	docker build -t docmanfu-marketing .
