bash:
	docker run -it --rm -v ${PWD}:/app -w /app -p 5000:5000 node:latest bash

up:
	docker run -it --rm -v ${PWD}:/app -w /app -p 9009:9009 node:latest yarn start
