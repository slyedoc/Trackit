# Track It

Project to allow for anyone to track assets.

## Setup

Run the following to setup required dependencies:
```
npm update
bower update
```

> Requires bower to be installed globally 'npm install bower -g'

Copy config-example.json to config.json (will be git ignored)

Edit database.json with Postgres info, see [Install Postgres](#install-postgres)

## Start Development Server

```
gulp serve
```

> Requires gulp to be installed globally 'npm install gulp -g'

Open browser to [http://localhost:3000](http://localhost:3000)

## Install Postgres

Downloads can be found at [www.postgresql.org](http://www.postgresql.org/download/), which will most likely send you
to [www.enterprisedb.com] (http://www.enterprisedb.com/products-services-training/pgdownload)

> Be sure to remember the 'postgres' account password.

Once complete, you can run follow, provide the postrgres password when prompted:
```
createdb trackit
```

