import { Reducer, useReducer } from "react";

interface Data {
    result: number
}

interface Action {
    type: 'add' | 'minus',
    num: number
}

function reducer (state: Data, action: Action){
    switch (action.type) {
        case 'add':
            return { ...state, result: state.result + action.num };
        case 'minus':
            return { ...state, result: state.result - action.num };
    }
    return state;
}

function App() {
    const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0});
    return (
        <div>
            <div onClick={()=>dispatch({type:'add',num: 2})}>加</div>
            <div>{res.result}</div>
            <div onClick={()=>dispatch({type:'minus',num: 3})}>减去</div>
        </div>
    )
}

export default App