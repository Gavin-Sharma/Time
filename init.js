conn = new Mongo();
db = conn.getDB("project1");

db.createUser(
        {
            user: "root",
            pwd: "root",
            roles: [
                {
                    role: "readWrite",
                    db: "project1"
                }
            ]
        }
)


db.createCollection("times", {
   exercise: {type: NumberDecimal, decimal: [5, 2]},
   homework: {type: NumberDecimal, decimal: [5, 2]},
   sleep: {type: NumberDecimal, decimal: [5, 2]},
   phone: {type: NumberDecimal, decimal: [5, 2]},
   family: {type: NumberDecimal, decimal: [5, 2]},
   school: {type: NumberDecimal, decimal: [5, 2]}
})
