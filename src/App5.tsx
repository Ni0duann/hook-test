import { produce } from "immer";
import { Reducer, useReducer } from "react";

interface Data {
    a: {
        c: {
            e: number,
            f: number
        },
        d: number
    },
    b: number
}

interface Action {
    type: 'add' | 'minus',
    num : number;
}

function reducer(state: Data,action:Action) {
    switch(action.type) {
        case 'add':
            return produce(state,(state) => {
                state.a.c.e += action.num
            })
        case 'minus':
            return produce(state,(state) => {
                state.b -= action.num
            })
    }
    return state
}


function App() {
    const [res,dispatch] = useReducer<Reducer<Data,Action>,string>(reducer,'zero',(param)=>{
        return {
            a: {
                c: {
                    e: 0,
                    f: 0
                },
                d: 0
            },
            b: 0
        }
    });
    return (
        <div>
            <div onClick={()=>dispatch({type:'add', num: 2})}>add</div>
            <div>{JSON.stringify(res)}</div>
            <div onClick={()=>dispatch({type: 'minus',num:3})}>minus</div>
        </div>
    )
}

export default App