var DataTypes = require("sequelize").DataTypes;
var _Admin = require("./Admin");
var _Favoriler = require("./Favoriler");
var _Firma = require("./Firma");
var _Iade = require("./Iade");
var _Kategori = require("./Kategori");
var _Log = require("./Log");
var _Odeme = require("./Odeme");
var _Resim = require("./Resim");
var _Sepet = require("./Sepet");
var _SepetDetay = require("./SepetDetay");
var _SequelizeMeta = require("./SequelizeMeta");
var _Siparis = require("./Siparis");
var _SiparisDetay = require("./SiparisDetay");
var _Tedarikci = require("./Tedarikci");
var _Teslimat = require("./Teslimat");
var _Urun = require("./Urun");
var _UrunResim = require("./UrunResim");
var _User = require("./User");
var _UserAdress = require("./UserAdress");
var _Yorum = require("./Yorum");

function initModels(sequelize) {
  var Admin = _Admin(sequelize, DataTypes);
  var Favoriler = _Favoriler(sequelize, DataTypes);
  var Firma = _Firma(sequelize, DataTypes);
  var Iade = _Iade(sequelize, DataTypes);
  var Kategori = _Kategori(sequelize, DataTypes);
  var Log = _Log(sequelize, DataTypes);
  var Odeme = _Odeme(sequelize, DataTypes);
  var Resim = _Resim(sequelize, DataTypes);
  var Sepet = _Sepet(sequelize, DataTypes);
  var SepetDetay = _SepetDetay(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var Siparis = _Siparis(sequelize, DataTypes);
  var SiparisDetay = _SiparisDetay(sequelize, DataTypes);
  var Tedarikci = _Tedarikci(sequelize, DataTypes);
  var Teslimat = _Teslimat(sequelize, DataTypes);
  var Urun = _Urun(sequelize, DataTypes);
  var UrunResim = _UrunResim(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var UserAdress = _UserAdress(sequelize, DataTypes);
  var Yorum = _Yorum(sequelize, DataTypes);

  Urun.belongsTo(Kategori, { as: "Kategori", foreignKey: "KategoriId"});
  Kategori.hasMany(Urun, { as: "Uruns", foreignKey: "KategoriId"});
  Siparis.belongsTo(Odeme, { as: "Odeme", foreignKey: "OdemeId"});
  Odeme.hasMany(Siparis, { as: "Siparis", foreignKey: "OdemeId"});
  Kategori.belongsTo(Resim, { as: "ResimUrl_Resim", foreignKey: "ResimUrl"});
  Resim.hasMany(Kategori, { as: "Kategoris", foreignKey: "ResimUrl"});
  SepetDetay.belongsTo(Sepet, { as: "Sepet", foreignKey: "SepetId"});
  Sepet.hasMany(SepetDetay, { as: "SepetDetays", foreignKey: "SepetId"});
  Iade.belongsTo(Siparis, { as: "Sipari", foreignKey: "SiparisId"});
  Siparis.hasMany(Iade, { as: "Iades", foreignKey: "SiparisId"});
  SiparisDetay.belongsTo(Siparis, { as: "Sipari", foreignKey: "SiparisId"});
  Siparis.hasMany(SiparisDetay, { as: "SiparisDetays", foreignKey: "SiparisId"});
  Teslimat.belongsTo(Siparis, { as: "Sipari", foreignKey: "SiparisId"});
  Siparis.hasMany(Teslimat, { as: "Teslimats", foreignKey: "SiparisId"});
  Urun.belongsTo(Tedarikci, { as: "Tedarikci", foreignKey: "TedarikciId"});
  Tedarikci.hasMany(Urun, { as: "Uruns", foreignKey: "TedarikciId"});
  Favoriler.belongsTo(Urun, { as: "Urun", foreignKey: "UrunId"});
  Urun.hasMany(Favoriler, { as: "Favorilers", foreignKey: "UrunId"});
  Iade.belongsTo(Urun, { as: "Urun", foreignKey: "UrunId"});
  Urun.hasMany(Iade, { as: "Iades", foreignKey: "UrunId"});
  SepetDetay.belongsTo(Urun, { as: "Urun", foreignKey: "UrunId"});
  Urun.hasMany(SepetDetay, { as: "SepetDetays", foreignKey: "UrunId"});
  SiparisDetay.belongsTo(Urun, { as: "Urun", foreignKey: "UrunId"});
  Urun.hasMany(SiparisDetay, { as: "SiparisDetays", foreignKey: "UrunId"});
  UrunResim.belongsTo(Urun, { as: "Urun", foreignKey: "UrunId"});
  Urun.hasMany(UrunResim, { as: "UrunResims", foreignKey: "UrunId"});
  Yorum.belongsTo(Urun, { as: "Urun", foreignKey: "UrunId"});
  Urun.hasMany(Yorum, { as: "Yorums", foreignKey: "UrunId"});
  Favoriler.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Favoriler, { as: "Favorilers", foreignKey: "UserId"});
  Sepet.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Sepet, { as: "Sepets", foreignKey: "UserId"});
  Siparis.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Siparis, { as: "Siparis", foreignKey: "UserId"});
  UserAdress.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(UserAdress, { as: "UserAdresses", foreignKey: "UserId"});
  Yorum.belongsTo(User, { as: "User", foreignKey: "UserId"});
  User.hasMany(Yorum, { as: "Yorums", foreignKey: "UserId"});

  return {
    Admin,
    Favoriler,
    Firma,
    Iade,
    Kategori,
    Log,
    Odeme,
    Resim,
    Sepet,
    SepetDetay,
    SequelizeMeta,
    Siparis,
    SiparisDetay,
    Tedarikci,
    Teslimat,
    Urun,
    UrunResim,
    User,
    UserAdress,
    Yorum,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
