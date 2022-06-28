const isFalsy = (value) => (value === 0 ? true : !!value);

// 清除对象内部的空属性
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    const value = result[key];
    // TODO 这种情况会将0的情况排除
    if (!isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
