# Fullstack Applicatio

- dynamic routes
- add ORM to deal with DAL layer

NPM - Manages packages but doesn't make life easy executing any.
NPX - A tool for executing Node packages.

## Domain Modelling

using types

## DAL

### internationalization

how to support multi-lingual content with Prisma.
How to store a text-field in multiple languages?

### Typescript

declare is used to tell the compiler "this thing (usually a variable) exists already,
and therefore can be referenced by other code, also there is no need to compile this statement into any JavaScript".

## GraphQL

```
├── pages
|  ├── api
|  |  ├── graphql.js
|  |  ├── resolvers
|  |  |  └── index.js
|  |  └── schemas
|  |     └── index.js
|  └── index.js
├── package.json
└── yarn.lock
```

https://www.smashingmagazine.com/2020/10/graphql-server-next-javascript-api-routes/

- use `apollo-server-micro` with nextjs

---

feat(orm): fetch data in component from prisma

best-practise for database connections.

## DEV envoronments have fast-refresh, can exhaust db connection pools

so we add a new property to global js object
https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices

## getServerSideProps Fails to Serialize Date Object

https://github.com/vercel/next.js/issues/13209

## cors issues with hosted graphQL studio, network error

micro-cors

### TODO

- [ ] [ability to switch db based on env, planetscale for prod and sqlite for local](https://github.com/prisma/prisma/issues/2443)
