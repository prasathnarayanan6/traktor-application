import { Navigate, Outlet } from 'react-router-dom'
function ProtectedRoutes({ requiredRoles }){  
  let role = sessionStorage.getItem('role');
  let token  = localStorage.getItem('token')
  let result = {'token': token, 'role': role}
//   let auth = {'token':true}
//     return (
//         result.token && result.role ? <Outlet/> : <Navigate to='/'/>
//     )
    if(!token || !role)
    {
        return <Navigate to="/" />
    }
    if(requiredRoles && !requiredRoles.includes(role)){
        return <Navigate to="/" />
    }
    return <Outlet />
}
export default ProtectedRoutes;