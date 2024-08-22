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
async function ApiViewConnections()
{
    try{
        const result = await axios.get('http://localhost:3003/api/v1/viewconnections');
        return result.data;
    }
    catch(error)
    {
        console.error("Error in APi", error);
        throw error;
    }
}

async function ApiEstablishConnections(EstablishConnection)
{
    try
    {
        const result = await axios.post('http://localhost:3003/api/v1/establish-connection', );
        return result.data;
    }
    catch(error)
    {
        console.error("Error",error);
        throw error
    }
}
export {ApiAddConnections, ApiViewConnections, ApiEstablishConnections};