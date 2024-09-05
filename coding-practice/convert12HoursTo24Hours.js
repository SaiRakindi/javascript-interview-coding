const convert12HoursTo24Hours = (time12Hours) => {
  const [time, modifier] = time12Hours.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") hours = "00";

  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${minutes} ${modifier}`;
};

console.log(convert12HoursTo24Hours("02:02 PM"));
console.log(convert12HoursTo24Hours("04:06 PM"));
console.log(convert12HoursTo24Hours("12:00 PM"));
console.log(convert12HoursTo24Hours("12:00 AM"));
