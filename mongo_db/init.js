use project1;
db.createCollection("times", {
   exercise: {type: Number, decimal: [5, 2]},
   homework: {type: Number, decimal: [5, 2]},
   sleep: {type: Number, decimal: [5, 2]},
   phone: {type: Number, decimal: [5, 2]},
   family: {type: Number, decimal: [5, 2]},
   school: {type: Number, decimal: [5, 2]}
})