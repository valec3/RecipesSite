const API_URL_RECIPES = 'https://api.edamam.com/api/recipes/v2?type=any'

const credentials = {
    app_id:import.meta.env.VITE_REACT_APP_APP_ID || '94479043513a738a86c57b61fc0343a7',
    app_key:import.meta.env.VITE_REACT_APP_APP_KEY || '59ec44d1'
}

export const fetchData = async (data) => {
    const { app_id, app_key } = credentials;
    try{
        const response = await fetch(`${API_URL_RECIPES}&q=${data}&app_id=${app_id}&app_key=${app_key}`,{    
            method: 'GET',    
            withCredentials: true,    
            crossorigin: true,    
            mode: 'no-cors',       
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:5173',
            }}
            );
        console.log(response)
        const result = await response.json()
        return result
    }
    catch(error){
        console.log(error)
        return []
    }
        
}

export const fetchDataGet = async (data) => {
    const { app_id, app_key } = credentials;
    try{
        const response = await fetch(`${API_URL_RECIPES}?app_id=${app_id}&app_key=${app_key}&q=${data}`);
        const result = await response.json()
        return result
    }
    catch(error){
        console.log(error)
    }
        
}

export const fetchData2 = async (defaultQuery) => {
    const { app_id, app_key } = credentials;
    try {
        const data = await fetch(`api/recipes/v2?type=public&q=${defaultQuery}&app_id=${app_id}&app_key=${app_key}`);
        console.log(data)
        const response = await data.json();
        return response;
    }
    catch(e) {
        console.log(e,'something went wrong')
        return e
    }
}