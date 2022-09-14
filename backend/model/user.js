const mongoose = require('mongoose');

const userSchema = new Schema({
    email : {
        type: String,
        required: true
    },
    password : {    type: String, required: true },
})

userSchema.pre("save", async function (next) {
    // console.log("hi from user");
    if (this.isModified("password")) {
      this.password = await bcrypt.hashSync(this.password, 10);
    }
    next();
  });


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;