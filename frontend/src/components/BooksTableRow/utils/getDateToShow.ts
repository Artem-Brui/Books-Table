const getDateToShow = (date: string | null) => {
  if (!date) {
    return "-";
  }

  const convertedDate = new Date(date).toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
    hour12: false,
  });

  const datePart = convertedDate
    .split("at")[0]
    .split(",")[1]
    .split(" ")
    .reverse()
    .join(" ")
    .trim();
  
  const yearPart = convertedDate
    .split("at")[0]
    .split(",")[2]
    .trim();
  
  const timePart = convertedDate.split("at")[1];

  return `${datePart} ${yearPart} ${timePart}`;
};

export default getDateToShow;