import React from "react";

const Home = () => {
    let name = 'Satya';
    let sub = ['Physics','Chemistry','Math','Biology','English'];
    let table =['No','Team','Matches','Won','Lost','Tied','NRR','Points'];
    //let tname=['Satya','Rahul','Ram','Shyam','Mohan'];
    let tvalue=[
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        },
        {
            name:'Satya',
            course:'B.Tech',
            branch:'I.T',
            yr:'3rd',
            sem:'5th'
        }
    ]
    let tvalue1=[
        {
            "No": 1,
            "Team": "Gujarat Titans",
            "Matches": 14,
            "Won": 10,
            "Lost": 4,
            "Tied": 0,
            "NRR": 0.316,
            "Points": 20
        },
        {
            "No": 2,
            "Team": "Rajasthan Royals",
            "Matches": 14,
            "Won": 9,
            "Lost": 5,
            "Tied": 0,
            "NRR": 0.298,
            "Points": 18
        },
        {
            "No": 3,
            "Team": "Lucknow Super Giants",
            "Matches": 14,
            "Won": 9,
            "Lost": 5,
            "Tied": 0,
            "NRR": 0.251,
            "Points": 18
        },
        {
            "No": 4,
            "Team": "Royal Challengers Bangalore",
            "Matches": 14,
            "Won": 8,
            "Lost": 6,
            "Tied": 0,
            "NRR": -0.253,
            "Points": 16
        },
        {
            "No": 5,
            "Team": "Delhi Capitals",
            "Matches": 14,
            "Won": 7,
            "Lost": 7,
            "Tied": 0,
            "NRR": 0.204,
            "Points": 14
        },
        {
            "No": 6,
            "Team": "Punjab Kings",
            "Matches": 14,
            "Won": 7,
            "Lost": 7,
            "Tied": 0,
            "NRR": 0.126,
            "Points": 14
        },
        {
            "No": 7,
            "Team": "Kolkata Knight Riders",
            "Matches": 14,
            "Won": 6,
            "Lost": 8,
            "Tied": 0,
            "NRR": 0.146,
            "Points": 12
        },
        {
            "No": 8,
            "Team": "Sunrisers Hyderabad",
            "Matches": 14,
            "Won": 6,
            "Lost": 8,
            "Tied": 0,
            "NRR": -0.379,
            "Points": 12
        },
        {
            "No": 9,
            "Team": "Chennai Super Kings",
            "Matches": 14,
            "Won": 4,
            "Lost": 10,
            "Tied": 0,
            "NRR": -0.203,
            "Points": 8
        },
        {
            "No": 10,
            "Team": "Mumbai Indians",
            "Matches": 14,
            "Won": 4,
            "Lost": 10,
            "Tied": 0,
            "NRR": -0.506,
            "Points": 8
        }
    ]
    return(
        <div>
            <h1 style={{color:'#5b156c'}}>Hii Everyone !!</h1>
            <p>{name} is here.</p>
            <ul>
                {
                    sub.map((item)=>(
                        <li>{item}</li>
                    ))
                }
            </ul>
            <table style={{backgroundColor:'aqua'}}>
                
                {
                    table.map((item)=>(
                        <th style={{color:'red'}}>{item}</th>
                    ))
                   
                }
                
                
                {
                     tvalue1.map((item)=>(
                        <tr>
                        <td>{item.No}</td>
                         <td>{item.Team}</td>
                         <td>{item.Matches}</td>
                         <td>{item.Won}</td>
                         <td>{item.Lost}</td>
                         <td>{item.Tied}</td>
                         <td>{item.NRR}</td>
                         <td>{item.Points}</td>
                         {/* <td>{item.Lost}</td>
                         <td>{item.Lost}</td> */}
                        </tr>
                    ))

                }
                
                
            </table>
        </div>
    )
   
}

export default Home;

