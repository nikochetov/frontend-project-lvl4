install:
	npm install && cd frontend && npm install

build:
	npm run build

start-backend:
	npx start-server --port 5001

start-frontend:
	cd frontend && CI=false DISABLE_ESLINT_PLUGIN=true npm run start

lint:
	cd frontend && npm run lint

test:
	cd frontend && npm run test
