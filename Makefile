start:
	docker-compose up -d

stop:
	docker-compose down

clean:
	docker-compose down -v

gn:
	pnpm db:generate

mg:
	pnpm db:migrate

mgp:
	pnpm db:mgprod

sd:
	pnpm db:seed

st:
	pnpm db:studio

