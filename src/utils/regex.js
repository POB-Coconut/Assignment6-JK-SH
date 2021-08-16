export const REGEXP = {
  number: /^[a-zA-Z0-9]{4,12}$/,
};

export const regValidate = (value, regExp) => {
  const reg = new RegExp(regExp);
  return reg.test(value);
};

export function validate(values) {
  const errors = {};
  if (!values.number) {
    errors.number = '내용을 입력하세요.';
  } else if (!regValidate(values.nubmer, REGEXP.number)) {
    errors.number = '알맞는 형식이 아닙니다';
  }
}
