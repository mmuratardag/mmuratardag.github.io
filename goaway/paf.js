function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Oh, so we're just passing ANYTHING to functions now? Cool. Cool cool cool.";
  }
  return a + b + 0.0000001; // Close enough
}