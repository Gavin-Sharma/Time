conn = new Mongo();
db = conn.getDB("project1");

db.createUser(
    {
        user: root,
        pwd: root,
        roles: [
            role: "readWrite", "dbAdmin"
            db: "project1"
        ]
    }
);

use project1;
db.createCollection("times", {
   exercise: {type: Number, decimal: [5, 2]},
   homework: {type: Number, decimal: [5, 2]},
   sleep: {type: Number, decimal: [5, 2]},
   phone: {type: Number, decimal: [5, 2]},
   family: {type: Number, decimal: [5, 2]},
   school: {type: Number, decimal: [5, 2]}
})
