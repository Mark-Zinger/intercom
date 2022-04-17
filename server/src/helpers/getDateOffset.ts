const getDateOffset = (date=0, month=0) => {

  const now = new Date(Date.now());

  return new Date(
    now.getFullYear(),
    now.getMonth() + month,
    now.getDate() + date,
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ).toISOString();
};

export default getDateOffset;
