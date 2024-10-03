module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Enter_Your_Root_Password",
    DB: "user_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
