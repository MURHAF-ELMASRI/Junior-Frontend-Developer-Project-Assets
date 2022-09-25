export default function formatDate(dateStr: string) {
  const withHour = !!dateStr.split(" ")[1];

  const date = new Date(dateStr);

  const localDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: withHour ? "2-digit" : undefined,
    minute: withHour ? "2-digit" : undefined,
  });
  return withHour ? localDate.replace("at", "-") : localDate;
}
