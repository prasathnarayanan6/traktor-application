var PhoneNumberValid = (phoneNumber) => {
  var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (regex.test(phoneNumber)) {
    return true;
  } else {
    return false;
  }
}
module.exports = PhoneNumberValid;