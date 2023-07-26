export interface UnsplashImage {
    user: {
        username: string;
    };

    urls: {
        raw: string;
    };

    width: number;
    height: number;

    description: string;
}

export interface UnsplashSearchResponse {
    results: UnsplashImage[];
}
