export interface ImageList {
    results: ImageData[]
}

export interface ImageData {
    key: string,
    url: string,
    uploaded: string,
    size: number
}