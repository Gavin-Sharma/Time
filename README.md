# Time ⏲

## Start Project
`docker-compose up -d`

## Clean Up
`docker-compose down`

------------
# Services Notes
## Enter Data
- Go to local http://localhost:5000/
- This service collects hour/min data and stores it as floats

## MySql DB
- connect to mysql to check table `docker exec -it <container_id> mysql -p`
  - password: root

## Mongo DB
- connect to mongo to check table 'docker exec -it <container_id> mongosh
