
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// use bcrypt for password hashing
const bcrypt = require('bcrypt');

// create the User model
class User extends Model {
    
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

// define the table columns and configuration
User.init(
  {
    
    id: {
        
        type: DataTypes.INTEGER,
     
        allowNull: false,
        // define this comumn as the the Primary Key
        primaryKey: true,
        // turn on auto increment
        autoIncrement: true
        },
        // define a username column
        username: {
        // define the data type
        type: DataTypes.STRING,
        // require the data to be entered
        allowNull: false,
        validate: {
          notEmpty: true,
        }
        },
        // define an email column
        email: {
        // define the data type
        type: DataTypes.STRING,
        // require the data to be entered
        allowNull: false,
        // do not allow duplicate email values in this table
        unique: true,
        // if allowNull is set to false, the data can be validated before creating the table data
        validate: {
            // this will check the format of the entry as a valid email by pattern checking <string>@<string>.<string>
            isEmail: true
            }
        },
        // define a password column
        password: {
        // define the data type
        type: DataTypes.STRING,
        // require the data to be entered
        allowNull: false,
        validate: {
            // this means the password must be at least four characters long
            len: [4]
            }
        }
  },
  {
    
    hooks: {
        
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
          }
    },
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;