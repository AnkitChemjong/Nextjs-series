import BlogOverview from "@/components/blog-overview";

async function fetchAllBlog(){
  try{
      const apiResponse=await fetch('http://localhost:8000/api/get-blog',{
        method:"GET",
        cache:'no-store'
      })
      const result=await apiResponse.json();
      if(result.success){
        return result?.data;
      }
  }
  catch(error){
    console.log(error.message);
  }
}

async function  Blogs(){
  const blogList=await fetchAllBlog();
  // console.log(blogList);
  return (
    <div>
      <BlogOverview blogList={blogList}/>
    </div>
  )
}
export default Blogs;


