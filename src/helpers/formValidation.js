export const emailValidation = (email) => {
  if (email.includes("@redberry.ge")) return true;
  else return false;
};

export const phoneValidation = (phone) => {
  // /\+\S*9\S*9\S*5\S*5\S*[976514]\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*\d\S*/.test(phone)
  if (phone.length === 9) return true;
  else return false;
};

export const hasLength = (value) => {
  if (value.length) return true;
  else return false;
};

export const minLength = (value, length) => {
  if (value.length >= length) return true;
  else return false;
};

export const isGeorgian = (value) => {
  return /^[ა-ჰ]+$/.test(value);
};
