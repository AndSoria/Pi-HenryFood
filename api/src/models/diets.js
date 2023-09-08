const {DataTypes} = require ('sequelize');

module.exports= (sequelize)=>{
    sequelize.define('diets',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true ,
            autoIncrement:true,
           
        },
        name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        // created:{ //funciona como una bandera para identificar que nosotros lo creamos
        //     type:DataTypes.BOOLEAN,
        //     defaultValue:true,
        // }

    }, {timestamps:false})
}