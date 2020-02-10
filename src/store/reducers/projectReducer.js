const initState = {
    projects: [
        {id: '1', title: 'Big Ass', content: '8,500 CFM 33 W at max speed 40 dBA at max speed 60 fan sweep diameter'},
        {id: '2', title: 'Minka', content: '8,500 CFM 33 W at max speed 40 dBA at max speed 60 fan sweep diameter'},
        {id: '3', title: 'Westinghouse', content: '8,500 CFM 33 W at max speed 40 dBA at max speed 60 fan sweep diameter'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer