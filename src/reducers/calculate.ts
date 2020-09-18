export const INCREMENT = "INCREMENT"
export const REDUCE = "REDUCE"
export const UPLIST = "UPLIST"

export const incrementAction = {type: INCREMENT, count: 2}
export const reduceAction = {type: REDUCE, count: 1}
export const uplistAction = (param: any) => {
  return {type: UPLIST, param: param }  
}


interface ReduxState {
    num: number,
    list: any[],
}

interface Action {
    type: string,
    count: number,
    param: number,
}

const initData = {
    num: 0,
    list: []
}


const calculate = (state: ReduxState = initData, action: Action) => {
    switch (action.type) {
        case INCREMENT:
            console.log(state.num)
            return {
                ...state,
                num: state.num + action.count
            }
        case REDUCE:
            
            return {
                ...state,
                num: state.num - action.count
            }
        case UPLIST:
            // console.log(action['param']);
            return {
                num: state.num,
                list: action.param
            }
        default:
            return state
    }
}

export {calculate}