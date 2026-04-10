import SearchForm from "./components/SearchForm"
import PostList from "./components/PostList";
import { useState } from "react"
import useFetchPosts from "./store/useFetchPosts"



export default function App(){

  const [url, setUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const url = formData.get("url") as string
    if(url.trim()){
      setUrl(url)
    }
  }

  const postData = useFetchPosts(url)

  const currentPosts = postData.data?.slice(indexOfFirstPost, indexOfLastPost) || [];
  const totalPages = postData.data ? Math.ceil(postData.data.length / postsPerPage) : 0;

  return (
    <div
    className="px-25 py-5"
    >
      <div
      className="flex flex-col gap-5"
      >
        <div>
          <h1
          className="text-2xl font-bold"
          >Post Fetcher</h1>
          <p className="text-gray-500">Enter a URL to fetch and display posts from</p>
        </div>

        <SearchForm onSubmit={handleSubmit}/>

        {postData.data && (
          <PostList 
          posts={currentPosts} 
          totalCount={postData.data.length}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        )}
        
      </div>
    </div>
  )
}