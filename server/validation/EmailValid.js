var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
var EmailValid = (official_email_address) => {
    if(!official_email_address)
        return false;
    if(official_email_address.length>254)
        return false;

    var valid = emailRegex.test(official_email_address);
    if(!valid)
        return false

    var parts = official_email_address.split("@");
    if(parts[0].length>64)
        return false;
    
    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part){ return part.length>63;}))
        return false;

    return true;
}
module.exports = EmailValid;