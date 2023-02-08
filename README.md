# Time ⏲

## Start Project

`docker-compose up --build -d`

## Clean Up

`docker-compose down`

---

# Services Notes

## Enter Data

- Go to local http://localhost:8001/
- This service collects hour/min data and stores it as floats

## MySql DB

- connect to mysql to check table `docker exec -it <container_id> mysql -p`
  - password: root

## Mongo

- connect to container `docker exec -it <container_id> bash`
- connect to mongo `mongosh -u root -p root`
- use db `use analytics;`
- show rows `db.analytics_mean.find();`

## Authentication Service

- Go to local http://localhost:3001/
- This goes to a homepage for the enter data and view data services

## View Data

- Go to local http://localhost:8004/
- Shows the data from the mongodb instance
