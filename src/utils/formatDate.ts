const formatDate = (timestamp: Date): string =>
  Intl.DateTimeFormat('en-GB').format(timestamp);

export default formatDate;
