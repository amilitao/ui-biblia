import { client } from "../clientApi"


export const getBooks = () => {
    return client.get("/books");
}