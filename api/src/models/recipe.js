const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
   },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull:false,
   },
   dishSummary:{
    type: DataTypes.STRING,
    allowNull:false,
   }, //resumen del plato
   healthScore:{
    type: DataTypes.STRING,
    allowNull:false,
   },//nivel de comida saludable

   instructions:{
    type:DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
   },//paso a paso

   created:{
    type:DataTypes.BOOLEAN,
    defaultValue:true,
}

  }, {timestamps:false});
};
