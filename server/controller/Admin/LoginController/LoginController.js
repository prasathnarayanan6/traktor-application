const LoginModel = require('../../../model/LoginModel');
const jwt = require('jsonwebtoken');
const LoginController = async (req, res) => {
    const{user_mail, user_password} = req.body;
    if(user_mail && user_password)
    {
        try
        {
            const result = await LoginModel(user_mail, user_password);
            if(result.status === "Login Authenticated")
            {
                    res.cookie('token', result.accessToken, {
                        httpOnly: true,
                        maxAge: 5 * 60 * 1000 // 15 minutes
                    });
            }
            res.status(200).json({result}); 
        } 
        catch (err)
        {
            
            res.status(404).json({error: 'Internal Server Error', err: err});
        }
    }
    else 
    {
		res.status(200).json({authentication: 'Please enter username and password properly!'})
	}
}

module.exports = LoginController;