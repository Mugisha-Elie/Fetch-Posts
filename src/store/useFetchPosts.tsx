import { useEffect, useState } from "react";
import type { Post, FetchState } from "../types/Post";

export default function useFetchPosts(url: string): FetchState{

  const [state, setState] = useState<FetchState>({
    data: null,
    isLoading: false,
    error: null
  })

  useEffect(() => {
    if(!url) return;
    const controller = new AbortController();
    async function fetchPosts(){
        setState((prev) => ({...prev, isLoading: true, error: null}))
      try{
        const response = await fetch(url, {signal: controller.signal})

        if(!response.ok){
            throw new Error(`An HTTP Error occurred: ${response.status}, ${response.statusText}`)
        }

        const posts:Post[] = await response.json()
        setState(prev => ({...prev, data: posts, isLoading:false, error:null}))

      }catch(error){
        const message = error instanceof Error && error.name === "AbortError" 
        ? "Fetch Aborted" 
        : error instanceof Error ? error.message : "An unknown error occurred check your connection and try again"

        setState(prev => ({...prev, data: null, isLoading: false, error: message}))
      }
    }

    fetchPosts()

    return() => controller.abort()

  }, [url])

  return state
}