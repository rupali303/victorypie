import React, { useState } from 'react';
import { VictoryPie } from 'victory-pie';

function TaskFour1() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [data, setData] = useState([])


    const handleValue1Change = (event) => {
        const newValue = event.target.value;
        if (newValue > 100) {
            setValue1(alert('Value should not exceed 100'))
        }
        setValue1(newValue);
        setValue2(100 - newValue);
    };
    const handleValue2Change = (event) => {
        const newValue = event.target.value;
        if (newValue > 100) {
            setValue2(alert('Value should not exceed 100'))
        }
        setValue2(newValue);
        setValue1(100 - newValue);
    };
    const handleCreateChart = () => {
        console.log("clicked");
        setData([
            { x: 'Box 1', y: value1/360 },
            { x: 'Box 2', y: value2/360 },
        ])
      
    }
    return (
        <>
        <div style={{width:"50%",border:"2px solid gray",margin:"10px auto",padding:"20px"}}>
            <input style={{margin:"0 10px 20px 0",borderRadius:"10px"}}
                type="number"
                value={value1}
                onChange={handleValue1Change}
                onBlur={() => {
                    if (value1 > 100) {
                        setValue1(100);
                        setValue2(0);
                    }
                }}
            />
            <input style={{margin:"0 10px 20px 0",borderRadius:"10px"}}
                type="number"
                value={value2}
                onChange={handleValue2Change}
                onBlur={() => {
                    if (value2 > 100) {
                        setValue2(100);
                        setValue1(0);
                    }
                }}
            />
            <button style={{margin:"10px 0 0 20px",backgroundColor:"blue",borderRadius:"10px",padding:"0 10px 0"}} onClick={handleCreateChart}>Create Chart</button>
           
            <VictoryPie radius={100}  data={data} />
        </div>
        {/* <div>
        <VictoryPie radius={50}  data={data} />
    </div> */}
    </>
    );
}

export default TaskFour1;

