const API_URL_RECIPES = 'https://api.edamam.com/api/recipes/v2?type=public'

const credentials = {
    app_id:import.meta.env.VITE_REACT_APP_APP_ID || '4aad3c24',
    app_key:import.meta.env.VITE_REACT_APP_APP_KEY || 'ec9a611228ef49e2620b47d73ec2df61'
}

export const fetchData = async (data='rice') => {
    const { app_id, app_key } = credentials;
    try{
        const response = await fetch(`${API_URL_RECIPES}&q=${data}&app_id=${app_id}&app_key=${app_key}`,{    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
            }
        );
        console.log(response)
        const result = await response.json()
        return result.hits
    }
    catch(error){
        console.log(error)
        return {
            status: 'error fetching data',
            error: error
        }
    }
        
}
