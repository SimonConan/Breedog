dev: install-globals install-backend install-frontend

install-globals:
	npm install -g nodemon
	npm install -g http-server

install-backend:
	cd /var/breedog/api && npm install

install-frontend:
	cd /var/breedog/frontend && npm install
	cd /var/breedog/frontend && npm run build