import { useEffect, useRef,useCallback, useState } from 'react';
function useInterval(fn: Function, time: number) {
    const ref = useRef(fn);

    ref.current = fn;

    let cleanUpFnRef = useRef<Function>();
    
    const clean = useCallback(() =>{
        cleanUpFnRef.current?.();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => ref.current(), time);

        cleanUpFnRef.current = ()=> {
            clearInterval(timer);
        }

        return clean;
    }, []);

    return clean;
}


function App() {
    const[count,setCount]  = useState(0);
    const callback = () => {
        setCount(count +1)
        console.log(count);
        
    }
    const clean = useInterval(callback,2000)
    return (
        <div>
            <div>{count}</div>
            <button onClick={clean}>tingzhi</button>
        </div>
    )
}


export default App