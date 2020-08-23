import React from 'react'
import down from '../img/down-arrow.png'

function ThirdPage({stats,countries,worldwide}) {
    console.log(worldwide)
    const tableData = []
    const removeCols = ["affectedCountries","updated","active_short","cases_short","recovered_short","deaths_short"]
    const cols = Object.keys(worldwide)
    if(stats[0]){
        for(let country in countries){
            let obj = {}
            obj["country"] = countries[country]
            for(let key in cols){
                if(removeCols.includes(cols[key])){
                    console.log(key)
                    continue
                }
                let temp = stats.filter((obj) => obj.country === countries[country])[0][cols[key]]
                obj[cols[key]] = temp
            }
            tableData.push(obj)
        }
    }
    console.log(tableData)
    const rows = tableData.map((obj) => {
        let entry = Object.keys(obj).map((key) => {
            return ( 
                <td> {obj[key]} </td>
                )
        })
        return (
            <tr> {entry} </tr>
         )
    })

    return (
        <div className="app-third" id="third">
            <div className = "app-third-title">
                <h1>Complete Statistics</h1>
            </div>
            <div className="stats-outer">
            <div className = "stats-table">
                <table>
                <tr>
                    <th>Country</th>
                    {   
                        worldwide === {}?"":Object.keys(worldwide).map((obj) => 
                                !removeCols.includes(obj)?<th>{obj}</th>:""
                        )
                    }
                </tr>
                    {   
                        tableData === []?"":rows
                    }
                </table>
            </div>
            </div>
            <div className="app-next">
                <a href="#second"><img style = {{marginLeft: "47vw"}}id="up"src={down} alt="up"></img></a>
            </div>
        </div>
    )
}

export default ThirdPage
