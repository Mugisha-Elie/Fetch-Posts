import type { Post } from "../types/Post";

interface PostListProps {
  posts: Post[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function PostList({ posts, totalCount, currentPage, totalPages, onPageChange }: PostListProps){
    return (
        <div className="mt-10">
        {/* Header with Pagination Controls */}
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Posts ({totalCount})</h2>
            
            <div className="flex items-center gap-4 text-sm text-gray-500">
            <button 
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="border px-3 py-1 rounded hover:bg-gray-50 disabled:opacity-50"
            >
                &lt; Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button 
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="border px-3 py-1 rounded hover:bg-gray-50 disabled:opacity-50"
            >
                Next &gt;
            </button>
            </div>
        </div>

        {/* The Post Cards */}
        <div className="space-y-6">
            {posts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-6">
                Post ID: {post.id} | User ID: {post.userId}
                </p>
                <p className="text-gray-600 leading-relaxed text-justify">
                {post.body}
                </p>
            </div>
            ))}
        </div>
        </div>
  );
}