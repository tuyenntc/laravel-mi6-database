export default (state, action) => {

    switch (action.type) {

        case 'user/set':
            return {
                ...state,
                user: action.payload
            }

    }

    return state;
}