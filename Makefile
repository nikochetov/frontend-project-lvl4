install:
	npm install

build:
	npm run build

start-backend:
	npx start-server --port 5001

start-frontend:
	cd frontend && npm run start

lint:
	npx eslint .
