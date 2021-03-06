const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      deafult: [],
    },
    followins: {
      type: Array,
      deafult: [],
    },
    isAdmin: {
      type: Boolean,
      deafult: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
