import axios from "axios";
async function ApiAddConnections(AddConnection)
{
    try{
        const result = await axios.post('http://localhost:3003/api/v1/add-connections', AddConnection);
        return result.data;
    }
    catch (error)
    {
        console.error("Error in API", error);
        throw error;
    }
}
export {ApiAddConnections};