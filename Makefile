dev: install-globals install-backend

install-globals:
	npm install -g nodemon

install-backend:
	cd /var/breedog/api && npm install