module.exports = function(sequelize, DataTypes){
   var EachSettle = sequelize.define("EachSettle",{
       //voter ID
       Voters:{
           type: DataTypes.INTEGER,
           allowNull: false
       },
       //weather or not the user has voted on the topic
       HasVoted:{
           type: DataTypes.BOOLEAN,
           allowNull: false
       },
       //which side the user voted on
       WhichSide:{
           type: DataTypes.BOOLEAN,
           allowNull: false
       },
       //ID of the settle
       SettleID:{
           type: DataTypes.INTEGER,
           allowNull:false
       }
   })
   return EachSettle;
}