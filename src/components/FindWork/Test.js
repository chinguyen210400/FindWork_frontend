import React from 'react'
import { useState , useEffect} from 'react'
function Test(workList) {
    const [state, setstate] = useState([])

    useEffect(() => {
        if (workList.length != 0){
            setstate(workList)
            console.log(state)
        }
    }, [workList.le])
    
    return (
        <div>
            
        </div>
    )
}

export default Test
