const BASE_URL = "http://localhost:3001";

export const fetcher = async (url) => {

        const response = await fetch(BASE_URL + url);
        const responseData = await response.json();
        return responseData;
};

export const getProductById = id => {
        return fetcher('/products/' +id);
}  

export const getProduct = id => {
        return fetcher("/products?catId=" + id);
} 

export const getProductByQuerry = query => {
       return fetcher('/products?q=' + query);
}