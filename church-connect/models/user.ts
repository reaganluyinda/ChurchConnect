import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  password?: string;
  id: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;
