enum Format {
  M = 1000000,
  T = 1000,
}

const formatNumber = (value: number) => {
  switch (true) {
    case value >= Format.M:
      return { value: value / Format.M, suffix: 'M)' };
    case value >= Format.T:
      return { value: value / Format.T, suffix: 'K)' };
    default:
      return { value, suffix: ')' };
  }
};

export default formatNumber;
