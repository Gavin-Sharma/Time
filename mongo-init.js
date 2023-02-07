// db = conn.getDB("project1");
db = db.getSiblingDB('project1')

db.createUser({
    user: "root",
    pwd: "root",
    roles: [
        {
            role: "readWrite",
            db: "project1"
        }
    ]
});

