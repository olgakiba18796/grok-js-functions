function foo(f) {
  return f();
}

foo(() => 42);

// Результат foo = 42 потому что она возвращает то, что вернет вызов анонимной коллбэк-функции.
