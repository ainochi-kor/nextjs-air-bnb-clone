//* 쿠키의 정보를 Object로 변환
export const cookieStringToObject = (cookieString: string | undefined) => {
  const cookies: { [key: string]: string } = {};
  if (cookieString) {
    const itemString = cookieString?.split(/\s*;\s*/);
    itemString.forEach((pairs) => {
      const pair = pairs.split(/\s*=\s*/);
      cookies[pair[0]] = pair.splice(1).join("=");
    });
  }
  return cookies;
};

//* string에서 number만 return하는 함수
export const getNumber = (string: string) => {
  const numbers = string.match(/\d/g)?.join("");
  if (numbers) {
    return Number(numbers);
  }
  return null;
};
