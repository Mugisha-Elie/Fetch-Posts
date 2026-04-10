export interface Post{
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface FetchState{
    data: Post[] | null;
    isLoading: boolean;
    error: string | null
}

