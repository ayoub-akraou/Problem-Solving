function hello(name) {
  return name ? `Hello, ${name.toUpperCase()[0] + name.toLowerCase().slice(1)}!` : "Hello, World!"
}