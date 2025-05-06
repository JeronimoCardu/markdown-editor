export default function getDate() {
  const date = new Date();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  let month = `${date.getMonth() + 1}`;
  month = Number(month) < 10 ? `0${month}` : month;
  const year = date.getFullYear();
  const fullDate = `${day}-${month}-${year}`;
  return fullDate;
}
