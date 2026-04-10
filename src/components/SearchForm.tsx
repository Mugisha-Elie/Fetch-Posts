interface EventHandler{
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
}

export default function SearchForm({onSubmit}: EventHandler){
    return(
        <div
        className="border border-gray-400 rounded p-5 flex flex-col gap-3"
        >
            <div className="w-full">
                <div>
                    <h2
                    className="text-2xl font-bold"
                    >Fetch Posts</h2>

                    <p className="text-gray-500">Enter the API Endpoint URL to fetch posts from</p>
                </div>

                <form
                action=""
                onSubmit={onSubmit}
                className="flex gap-2 w-[80%]"
                >
                    <input 
                    type="text" 
                    name="url"
                    id="url"
                    className="border border-gray-300 px-4 py-2 text-gray-600 text-lg flex-1"
                    />

                    <button
                    className="bg-gray-900 px-4 py-2 text-white cursor-pointer rounded-lg"
                    >Fetch</button>
                </form>
            </div>
        </div>
    )
}