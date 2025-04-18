const getDateToShow = (date: string | null) => {
  if (!date) {
    return "-";
  }

  const convertedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  console.log(convertedDate);

  const datePart = convertedDate
    .slice(0, convertedDate.length - 8)
    .split(",")[0]
    .split(' ')
    .reverse()
    .join(' ')

  const yearPart = convertedDate
    .slice(0, convertedDate.length - 8)
    .split(",")[1]
    .slice(0, 5);

  const timePart = convertedDate
    .slice(convertedDate.length - 8)
    .split(":")
    .slice(0, 2)
    .join(":");

  const dateConstructor = [datePart, yearPart, timePart];

  return `${dateConstructor.join(' ')}`;
};

export default getDateToShow;
