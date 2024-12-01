import React, { useEffect, useImperativeHandle, useRef } from "react";


interface RefProps {
    aaa: () => void;
}

const Guang: React.ForwardRefRenderFunction<RefProps> = (props,ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
        return {
            aaa() {
                inputRef.current?.focus();
            }
        }
    },[inputRef])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}

const WrapedGuang = React.forwardRef(Guang)

function App() {
    const ref = useRef<RefProps>(null);

    useEffect(()=>{                        //父组件对子组件的ref操作
        console.log('ref',ref.current);
        ref.current?.aaa()
    },[])
    return (
        <div>
            <WrapedGuang ref={ref}/>
        </div>
    )
}

export default App