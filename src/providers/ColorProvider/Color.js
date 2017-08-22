class Color {
  constructor(color) {
    this.color = color
    this.subscribers = []
  }

  setColor(color) {
    this.color = color
    this.subscribers.forEach((subscriber) => subscriber())
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
}

export default Color
