var db = connect("mongodb://root:root@localhost:27017/");

db = db.getSiblingDB('new_db');

db.createUser(
    {
        user: "root",
        pwd: "roott",
        roles: [ { role: "readWrite", db: "project1"} ],
        passwordDigestor: "server",
    }
)