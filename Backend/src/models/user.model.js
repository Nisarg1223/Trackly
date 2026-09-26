import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    Username:{
        type:String,
        required:true
    }
},{timestamps:true})

UserSchema.pre('save', async function () {
    if (!this.password || !this.isModified('password')) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.comparePassword = async function (password) {
    if (!this.password) return false;
    return await bcrypt.compare(password, this.password);
};

const userModel = mongoose.model("User",userSchema);

export default userModel;