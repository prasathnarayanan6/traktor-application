var LinkValidation = (str) => {
    var regex = /^https:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;
    return regex.test(str);
}
module.exports = LinkValidation;