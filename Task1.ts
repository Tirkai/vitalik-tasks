import { data } from "./assets/data";

/*
    Нужно написать функцию которая на вход будет принимать 2 параметра
    - Объект
    - Путь до поля объекта
    Результатом выполнения будет значение поля
*/
const getValueByPath = (record: Record<string, any>, path: string) => {

}

console.log(getValueByPath(data, "result.users[0].groups[0].name")) // ==> Admin
console.log(getValueByPath(data, "result.users[0].groups[0].claims[1]")) // ==> {claimId: "b6bc268a-5bf5-4f6a-b2cc-23c22b691580", code: "posts:update"}  
console.log(getValueByPath(data, "result.users[0].groups[0].claims[2].code")) // ==> posts.delete
