export const getTime = () => {
  const date = new Date(Date.now());
  const formattedDate = `${
    date.getHours() <= 9 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds()
  }`;

  return formattedDate;
};
