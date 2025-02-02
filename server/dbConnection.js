import mysql from 'mysql2'
import dotenv from 'dotenv';

dotenv.config();  // Load .env variables

const dataBase = mysql.createConnection ( {
  host: 'localhost',
  user: 'root',
  password: '356174Caln!',
  database: 'QAnswer'
})



dataBase.connect ((err)=> {
  if (err) {
    console.log ("Error on DB connect:", err)
    return;
  }
  console.log ("Connected to QAnswer database")
})

export default dataBase;