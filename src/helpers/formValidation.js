export const emailValidation = (email) => {
  if (email.includes("@redberry.ge")) return false;
  else return true;
};

export const phoneValidation = (value) => {
  return !/^(\+?995)?(79\d{7}|5\d{8})$/.test(value);
};

export const isGeorgian = (value) => {
  return !/^[ა-ჰ]+$/.test(value);
};

export const hasLength = (value) => {
  if (value.length) return false;
  else return true;
};

export const minLength = (value, length) => {
  if (value.length >= length) return false;
  else return true;
};
