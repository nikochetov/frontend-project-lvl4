install:
	npm install

build:
	npm run build

start-backend:
	npx start-server --port 5001

start-frontend:
	cd frontend && CI=false DISABLE_ESLINT_PLUGIN=true npm run start

lint:
	npx eslint .

test:
	cd frontend && npm run test
