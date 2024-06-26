interface IEventEmitter {
  on: (eventName: string, callback: () => void) => void;
  off: (eventName: string, callback: () => void) => void;
  emit: (eventName: string) => void;
}

/*
    Необходимо реализовать шину событий
    Методом on() выполняется подписка на событие методом emit() происходит вызов события
    Также нужно реализовать механизм отписки
*/

class CustomEventEmitter implements IEventEmitter {}

const emitter = new CustomEventEmitter();

emitter.on("event1", () => console.log("event1"));

emitter.emit("event1");
emitter.emit("event2");
