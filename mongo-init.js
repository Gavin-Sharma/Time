var db = connect("mongodb://root:root@localhost:27017/");

db = db.getSiblingDB('new_db');

db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [ { role: "readWrite", db: "new_db"} ],
        passwordDigestor: "server",
    }
)