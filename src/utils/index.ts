const isFalsy = (value: any) => (value === 0 ? true : !!value);

// 清除对象内部的空属性
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(object).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    // TODO 这种情况会将0的情况排除
    if (!isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};
