export const Time = {
  hour: (n) => {
    if (n === 0 || n === 24) {
      return `12am`;
    } else if (n > 12) {
      return `${n - 12}pm`;
    } else if (n === 12) {
      return `12pm`;
    } else {
      return `${n}am`;
    }
  }
};
