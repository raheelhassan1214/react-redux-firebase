const initState = {
    projects:[
        {id: '1',  title: 'help me find peeches', content: 'blah blah'},
        {id: '2',  title: ' use safeway store', content: ' I always buy from there'},
        {id: '3',  title: 'Trader Joe is better ', content: 'if you are looking good quality go to Trader Joe'},
    ]
}
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
        console.log('create project', action.project);
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.error);
        return state;
        default :
        return state
    }
}
export default projectReducer