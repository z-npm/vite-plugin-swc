function logClass(constructor: Function) {
  console.log(
    `Class ${constructor.name} was defined at ${new Date().toISOString()}`,
  )
}

@logClass
class TestLog {
  getUsers() {
    return ["Alice", "Bob", "Charlie"]
  }
}

console.log(new TestLog())
