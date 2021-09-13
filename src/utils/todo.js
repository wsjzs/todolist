 export function createTodo(content) {
     let time = new Date().getTime();
     let id = time + parseInt(Math.random() * 1000);
     return { id, time, content, done: false }
 }