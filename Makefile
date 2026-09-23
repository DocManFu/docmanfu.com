SHELL := /bin/sh
.DEFAULT_GOAL := help

PORT        ?= 8080
PREVIEW_PORT?= 8081
IMAGE       ?= docmanfu-marketing
URL         := http://localhost:$(PORT)
OPEN        := $(shell command -v open >/dev/null 2>&1 && echo open || echo xdg-open)

.PHONY: free-port help install up dev open build test verify clean rebuild docker-build preview preview-stop

help: ## Show this help
	@printf "\n\033[1mDocManFu marketing site\033[0m\n\n"
	@awk 'BEGIN{FS=":.*## "} /^[a-zA-Z_-]+:.*## /{printf "  \033[36m%-14s\033[0m %s\n",$$1,$$2}' $(MAKEFILE_LIST)
	@printf "\n  Override ports: make up PORT=3000\n\n"

node_modules: package.json package-lock.json
	npm ci
	@touch node_modules

install: node_modules ## Install dependencies

free-port: ## Kill whatever is listening on PORT
	@pids=$$(lsof -ti tcp:$(PORT) -sTCP:LISTEN 2>/dev/null); \
	if [ -n "$$pids" ]; then \
		echo "Killing process(es) on port $(PORT): $$pids"; \
		kill $$pids 2>/dev/null; sleep 1; \
		pids=$$(lsof -ti tcp:$(PORT) -sTCP:LISTEN 2>/dev/null); \
		[ -z "$$pids" ] || kill -9 $$pids 2>/dev/null || true; \
	fi

up: node_modules free-port ## Start dev server with live reload and open a browser
	@( until curl -sf -o /dev/null $(URL); do sleep 0.3; done; $(OPEN) $(URL) ) &
	npx eleventy --serve --port=$(PORT)

dev: up ## Alias for up

open: ## Open the running dev server in a browser
	$(OPEN) $(URL)

build: node_modules ## Build the static site into _site/
	npm run build

verify: ## Verify the built site (metadata, links, assets)
	node scripts/verify-site.mjs

test: node_modules ## Clean, build, and verify
	npm test

clean: ## Remove build output
	npm run clean

rebuild: clean build ## Clean and build

docker-build: ## Build the production Docker image
	docker build -t $(IMAGE) .

preview: docker-build ## Run the production nginx image locally and open it
	-@docker rm -f $(IMAGE)-preview >/dev/null 2>&1
	docker run -d --name $(IMAGE)-preview -p 127.0.0.1:$(PREVIEW_PORT):80 $(IMAGE)
	@until curl -sf -o /dev/null http://localhost:$(PREVIEW_PORT); do sleep 0.3; done
	$(OPEN) http://localhost:$(PREVIEW_PORT)

preview-stop: ## Stop the production preview container
	docker rm -f $(IMAGE)-preview
