<p align="center" style="font-size:40px; margin:0">
  NestJs Graphql Boilerplate
</p>

## Clone

```bash
$ git clone
```

## Setting

```javascript
# .env 세팅
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=mysecretpassword
POSTGRES_DATABASE=my_database
PORT=3000
MODE=DEV
RUN_MIGRATIONS=true
```

<span style="color:pink;">**postgres docker 사용시**</span>

> .env 와 start-db.sh 의 세팅이 같아야함.
>
> - dbuser 는 postgres 로 고정

```bash
# 도커 이미지 빌드
$ docker pull postgres
```

```javascript
// src/scripts/start-db.sh 수정
PW = 'mysecretpassword';
DB = 'my_database';
```

## Database Migrations

```bash
# migrate generate
$ npm run typeorm:migration:generate -- [want name]

# migrate run
$ npm run typeorm:migration:run

# migrate revert
$ npm run typeorm:migration:revert
```

## Running the app

```bash
# docker db 사용시
$ npm run start:dev:db

# development
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
