// let state = {
//     clicks: 0,
//     count: 0,
// };
//let newState = state;
// let newState = {
//     ...state,
//     count: 5,
// };
// newState.clicks = 5;
// console.log(state);
// console.log(newState);
// const state = {
//     house: {
//         name: 'Ravenclaw',
//         points: 17,
//     },
// };
// let newState = {
//     ...state,
//     house: {
//         ...state.house,
//         points: state.house.points + 2,
//     },
// };
// const state = {
//     school: {
//         name: 'Hogwarts',
//         house: {
//             name: 'Ravenclaw',
//             points: 17,
//         },
//     },
// };
// let newState = {
//     ...state,
//     school: {
//         ...state.school,
//         house: {
//             ...state.school.house,
//             points: state.school.house.points + 2,
//         },
//     },
// };
// const key = 'ravenclaw';
// const state = {
//     houses: {
//         gryffindor: {
//             points: 15,
//         },
//         ravenclaw: {
//             points: 18,
//         },
//         hufflepuff: {
//             points: 7,
//         },
//         slytherin: {
//             points: 5,
//         },
//     },
// };
// let newState = {
//     ...state,
//     houses: {
//         ...state.houses,
//         [key]: {
//             ...state.houses.ravenclaw,
//             points: state.houses[key].points + 3,
//         },
//     },
// };
// let state = [1, 2, 3]; // [0, 1, 2, 3]
// const newItem = 0;
// let newState = [newItem, ...state];
// let state = [1, 2, 'X', 4];
// let newState = state.map((item) => {
//     if (item === 'X') {
//         return 3;
//     }
//     return item;
// });
// let state = [
//     {
//         id: 1,
//         email: 'jen@reyholmindustries.com',
//         data: {
//             firstName: 'Jen',
//         },
//     },
//     {
//         id: 2,
//         email: 'peter@initech.com',
//         data: {
//             firstName: 'Peter',
//         },
//     },
// ];
// let newState = state.map((item) => {
//     if (item.id === 2) {
//         return {
//             ...item,
//             data: {
//                 ...item.data,
//                 firstName: 'Jennifer',
//             },
//         };
//     }
//     return item;
// });
// let state = [1, 2, 3, 5, 6];
// const newItem = 4;
// let newState = state.slice(); //[...state]
// newState.splice(3, 0, newItem);
// let newState = [
//     ...state.slice(0, 3), //[1, 2, 3]
//     newItem, //[4]
//     ...state.slice(3), //[5, 6]
// ];
// let state = [1, 2, 'X', 4];
// let newState = state.map((item, index) => {
//     if (index === 2) {
//         return 3;
//     }
//     return item;
// });
let state = [1, 2, 'X', 4];
let newState = state.filter((item, index) => {
    if (item === 'X') {
        return false;
    }
    return true;
});
console.log(state);
console.log(newState);