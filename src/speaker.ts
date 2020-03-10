var counter: number = 0;

export function speak() {
    console.log('Hello from the console!');
}

export function modify(element: HTMLSpanElement) {
    counter = counter + 1;
    element.innerHTML = counter.toString();
}