import { expose } from "threads/worker";

expose(function add(a: number, b: number) {
  return a + b;
});
