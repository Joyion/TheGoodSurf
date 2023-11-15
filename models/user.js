import mongoose from "mongoose";
import LocalStrategy from "passport-local"
import passportLocalMongoose from "passport-local-mongoose";


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
})

// Passsord field salted hashed and handled by Passport Local Mongoose
UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema)

export default User;
