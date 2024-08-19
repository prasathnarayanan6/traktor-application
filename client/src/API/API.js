import axios from "axios";
 function AddTeams(getData)
{

}

function AddConnections(AddConnection)
{
    const result = axios.post('http://localhost:3001/api/v1/addconnection', AddConnection);
    
}
export {AddTeams, AddConnections};