import { useEffect, useState } from "react";

// 自定义hooks 只加载一次的effect
export const useOnceMount = (callback) => {
  useEffect(callback, []);
};

// debounce 根据传入的值来判断，如果传入的值发生发生变化后，在规定的时间后生成新的值，新的值作为外部useEffect()依赖的参数
// 新的值发生变化，外部的useEffect()重新调用，达到debounce 的效果
export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debounceValue;
};
