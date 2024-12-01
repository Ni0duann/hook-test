import { memo, useCallback, useEffect, useMemo, useState } from "react";

function Aaa() {
    const [,setNum] = useState(1);
    const [count,setCount] = useState(2)
    // useEffect(() => {
    //     setInterval(() => {
    //         setCount(Math.random())
    //     }, 2000)
    // },[])
    useEffect(() => {
        setInterval(() => {
            setNum(Math.random())
        }, 2000)
    },[])

    const BbbCallback = useCallback(function () {
        // xxx
    },[])

    const count2 = useMemo(() => {
        return count*2;
    },[count])

    return (
        <div>
            <MemoBbb count={count2} callback={BbbCallback}></MemoBbb>
        </div>
    )
}

interface BbbProps {
    count: number;
    callback: Function
}

function Bbb(props: BbbProps) {
    console.log('bbb render');
    return <h2>{props.count}</h2>
}

const MemoBbb = memo(Bbb)

export default Aaa