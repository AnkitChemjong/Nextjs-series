import connectToDB from "@/database";
import Joi from "joi";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

const addNewBlog = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    // Check if the method is POST
    if (req.method !== "POST") {
      return NextResponse.json(
        { success: false, message: "Method Not Allowed" },
        { status: 405 }
      );
    }

    // Connect to the database
    await connectToDB();

    // Parse JSON data from request body
    const bodyData = await req.json();
    const { title, description } = bodyData;

    // console.log('Title:', title);
    // console.log('Description:', description);

    // Validate data
    const { error } = addNewBlog.validate({ title, description });
    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.details[0].message,
        },
        { status: 400 }
      );
    }

    // Create a new blog item
    const newlyCreatedBlogItem = await Blog.create({ title, description });
    if (newlyCreatedBlogItem) {
      return NextResponse.json({
        success: true,
        message: "New blog is created",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong in PostBlog",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong in PostBlog",
      },
      { status: 500 }
    );
  }
}
