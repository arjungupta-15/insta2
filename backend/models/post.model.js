import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        caption: { type: String, trim: true },
        image: { type: String }, // For image URL
        video: { type: String }, // For video URL
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    },
    { timestamps: true } // For createdAt and updatedAt
);

export const Post = mongoose.model("Post", postSchema);
