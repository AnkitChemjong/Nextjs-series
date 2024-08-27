import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const getCurrentBlogID = searchParams.get("id");
    if (getCurrentBlogID) {
      const deletedCurrentBlog = await Blog.findByIdAndDelete(getCurrentBlogID);
      if (deletedCurrentBlog) {
        return NextResponse.json({
          success: true,
          message: "Blog deleted successfully",
        });
      } else {
        return NextResponse.jsn({
          success: false,
          message: "Error deleting blog",
        });
      }
    } else {
      return NextResponse.jsn({
        success: false,
        message: "Blog Id not found",
      });
    }
  } catch (e) {
    console.log(e.message);
    return NextResponse.json({
      success: false,
      message: "Error deleting the Blog",
    });
  }
}
