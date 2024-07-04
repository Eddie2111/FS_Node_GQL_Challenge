# Services under docker

_As Postgres is being used, to create a Postgres database under 5432,5433 in docker._

Command:

```json
docker run -d -p 5432:5432 -p 5433:5433 --name postgres_products -e POSTGRES_USER=root -e POSTGRES_PASSWORD=admin postgres:latest
```

```json
example output->
>> a0b1d224ad35757460015248778b9c1d4892aeb916feb277bf8abac74710bb78
```
