const formatK = (num: number) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toString();
};

export default formatK;
