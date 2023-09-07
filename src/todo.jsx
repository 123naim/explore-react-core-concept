// export default function Todo({task, isDone}){
//     return (
//         <li>Task : {task}</li>
//     )
// }



// Condition Rendaring Option 1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return <li>Finished : {task}</li>
//     }
//     else{
//         return <li> Work On : {task}</li>
//     }
// }


// Conditional Rendaring Option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished : {task}</li>
//     }
//     return <li> Work On : {task}</li>
// }


// Conditional Randaring Option 3: Tarnary Oparetor
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone ? 'Finished' : 'Work on'} : {task}</li>
//     )
// }



// Condition Rendering Option 4: &&
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }


// Condition Rendering Option 5: ||
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }

// Conditional Rendering Option 6
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finished : {task}</li>;
    }
    else{
        listItem = <li>Work on : {task}</li>;
    }
    return listItem;
}