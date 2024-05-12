const formatTime = (time: number): string => {
  if (!time) {
    return "";
  }

  const h = Math.floor(time / 60);

  const m = `${time % 60}`.padStart(2, "0");

  return `${h}h ${m}m`;
};

export default formatTime;
