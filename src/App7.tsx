import React, { useEffect, useRef } from "react";

const Guang: React.ForwardRefRenderFunction<HTMLInputElement> = (props,ref) => {
    return (
        <div>
            <input ref={ref} />
        </div>
    )
}

const WrapedGuang = React.forwardRef(Guang)

function App() {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(()=>{                        //父组件对子组件的ref操作
        console.log('ref',ref.current);
        ref.current?.focus()
    },[])
    return (
        <div>
            <WrapedGuang ref={ref}/>
        </div>
    )
}

export default App