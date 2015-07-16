# Track It

Project to allow for anyone to track assets.

## Setup

Run the following to setup required dependencies:
```
npm update
bower update
```

> Requires bower to be installed globally 'npm install bower -g'

Copy database-example.json to database.json (will be git ignored)

Edit database.json with Postgres info, see [Install Postgres][]

## Start Development Server

```
gulp serve
```

> Requires gulp to be installed globally 'npm install gulp -g'

This starts and node express server with livereload of all .js and .html files

## Install Postgres

 TODO: test