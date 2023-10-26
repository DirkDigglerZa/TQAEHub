const sqlite3 = require('sqlite3').verbose();

class TQDB {
    constructor(dbPath) {
        this.db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error(err.message);
            }
            console.log('Connected to the TQ database.');
        });
    }

    run(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.run(sql, params, function(err) {
                if (err) {
                    console.log('Error executing sql ' + sql);
                    console.log(err);
                    reject(err);
                } else {
                    resolve({ id : this.lastID});
                }
            });
        });
    }

    get(sql, params = []) {
        return new Promise((resolve, reject) => {
          this.db.get(sql, params, (err, result) => {
            if (err) {
              console.log('Error running sql: ' + sql)
              console.log(err)
              reject(err)
            } else {
              resolve(result)
            }
          })
        })
    }

    all(sql, params = []) {
        return new Promise((resolve, reject) => {
          this.db.all(sql, params, (err, rows) => {
            if (err) {
              console.log('Error running sql: ' + sql)
              console.log(err)
              reject(err)
            } else {
              resolve(rows)
            }
          })
        })
    }
}

// db.serialize(() => {
//     db.each(`SELECT *
//              FROM Loot`, (err, row) => {
//       if (err) {
//         console.error(err.message);
//       }
//       console.log(row);
//     });
// });

// console.log(new Loot("Quinton", "1").test());

// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });


module.exports = TQDB;
