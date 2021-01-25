module.exports = function(sequelize, DataTypes) {
    var Badge = sequelize.define('Badge', {
        BadgeName: {
            type: DataTypes.STRING,
            notEmpty: true
        },
        PointsRequired:{
            type: DataTypes.INTEGER,
        },
       IconPath: {
           type: DataTypes.STRING
    }
    });

  Badge.associate = function(models) {
    Badge.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Badge;
}
       
  

  



