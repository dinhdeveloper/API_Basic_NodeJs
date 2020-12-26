module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
      name: {
        name: DataTypes.STRING,
      },
      image: {
        image: DataTypes.STRING,
      }
    });
  
    return Image;
  };
  