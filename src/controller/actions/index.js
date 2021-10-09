import shoppingApi from '../api/shoppingApi'

export const fetchProducts = ()=>{

    return async function(dispatch){
        const response = await shoppingApi.get('/product?promotional=true')

        dispatch({
            type:'FETCH_PRODUCTS',
            payload: response.data.data
        })
    }

}