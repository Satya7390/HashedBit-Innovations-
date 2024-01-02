import React, { useEffect, useState } from 'react'

const IplTable = () => {

    const [ipllist, setipllist] = useState([]);

    const callApi = async () => {
        const response = await fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data');
        const data = await response.json();
        console.log(data);
        setipllist(data);
    }
    useEffect(() => {
        callApi();
    }, [])

    const sorlistfn =()=>{
        let temp = ipllist.sort((a,b)=> a.NRR-b.NRR);
        setipllist([...temp]);
    }
    return (
        <div>
            <h2 className='bg-primary bg-opacity-25'>IPL Table </h2>
            <button onClick={sorlistfn}>Sort NRR</button>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Matche</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Tied</th>
                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ipllist.map((item) => (
                            <tr>
                                <td>{item.No}</td>
                                <td>{item.Team}</td>
                                <td>{item.Matches}</td>
                                <td>{item.Won}</td>
                                <td>{item.Lost}</td>
                                <td>{item.Tied}</td>
                                <td>{item.NRR}</td>
                                <td>{item.Points}</td>
                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    );
}

export default IplTable;