import moment from "moment";

export const humanize = (seconds) => {
  const unformat = moment.duration(seconds, "seconds");
  return unformat.humanize();
};

export const toMinutes = (seconds) => {
  const unformat = moment.duration(seconds, "seconds");
  return Math.floor(unformat.asMinutes());
};
