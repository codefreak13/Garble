import moment from 'moment'

export const date1 = (date) => (
  moment(date).format("YYYY-MM-DD")
);

export const date2 = (date) => (
  moment(date).format("DD-MM-YYYY")
);

export const date3 = (date) => (
  moment(date).format("YYYY/MM/DD")
);

export const date4 = (date) => (
  moment(date).format("DD/MM/YYYY")
);

export const date5 = (date) => (
  moment(date).format("DD-MM-YYYY HH:mm:ss")
);

export const LocaleDateString = () => {
  const date = new Date()
  return moment(date).format("DD/MM/YYYY")
};

export const UTCStringDate = () => (
  new Date().toUTCString()
);

export const date6 = (date) => (
  moment(date).format("YYYY-MM-DD HH:mm:ss")
)