/*
    Необходимо реализовать функцию аналог Promise.any.
    Можно использовать любые методы промисов кроме самого Promise.any
*/

interface IPromiseAnyOptions {
  promises: Promise<any>[];
}

const promiseAny = (options: IPromiseAnyOptions) => {};
