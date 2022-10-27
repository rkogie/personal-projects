export interface ServerError {
    statusCode: number,
    message: string | null,
    details: string | null
}