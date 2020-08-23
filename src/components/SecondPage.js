import React,{useState,useEffect} from 'react'
import down from '../img/down-arrow.png'
import {Line} from 'react-chartjs-2'
import numeral from 'numeral'

function SecondPage({location,current,countries,setLocation,timeStats}) {
    const [chartData,setChartData] = useState([])

    const options = {
        legend: {
            display: false
        },
        elements: {
            point: {
                radius: 0
            }
        },
        maintainAspectRatio: false,
        tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
                label: function (toolTipItem, data){
                    return numeral(toolTipItem.value).format("+0,0")
                }
            }
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    type: "time",
                    time: {
                        format: "MM/DD/YY",
                        tootltipFormat: "ll",
                    }
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        callback: function (value,index,values){
                            return numeral(value).format("0a")
                        }
                    }
                }
            ]
        }
    }
    const chart = () => {
        const arr = []
        let lastDataPoint
        
        for(let data in timeStats.cases){
            if(lastDataPoint){
                const newDataPoint = {
                    x: data,
                    y: timeStats["cases"][data] - lastDataPoint
                }
                arr.push(newDataPoint)
            }
            lastDataPoint = timeStats['cases'][data]
        }
        setChartData(arr)
    }

    useEffect(() => {
        chart()
        console.log(chartData)
    },[timeStats])

    return (
        <div className="app-second" id="second">
            <div className="select-country">
                <select>
                    <option onClick = {() => {setLocation("Worldwide")}}>Worldwide</option>
                    {countries.map((country) => 
                        <option onClick = {() => setLocation(country)}>{country}</option>
                    )}
                </select>
            </div>
            <div className="card-container">
                <div className="card">
                    <div style={{backgroundColor:"#ffd900"}} className="card-color"></div>
                    <h3>Active</h3>
                    <h1>{current.active_short}</h1>
                    <h3>{current.active}</h3>
                </div>
                <div className="card">
                    <div style={{backgroundColor:"#2fff00"}} className="card-color"></div>
                    <h3>Recovered</h3>
                    <h1>{current.recovered_short}</h1>
                    <h3>{current.recovered}</h3>
                </div>
                <div className="card">
                    <div style={{backgroundColor:"red"}} className="card-color"></div>
                    <h3>Deaths</h3>
                    <h1>{current.deaths_short}</h1>
                    <h3>{current.deaths}</h3>
                </div>
                <div className="card">
                    <div style={{backgroundColor:"#ff00f7"}} className="card-color"></div>
                    <h3>Total</h3>
                    <h1>{current.cases_short}</h1>
                    <h3>{current.cases}</h3>
                </div>
                <div className="card">
                    <div style={{backgroundColor:"blue"}} className="card-color"></div>
                    <h3>Location</h3>
                    <h2>{location}</h2>
                </div>
            </div>
            <div class="graph-header">
                <h2>Worldwide Case Growth</h2>
            </div>
            <div style = {{height: "35vh", width: "80vw", paddingLeft: "10vw"}}>
                {
                    chartData.length>0?
                    <Line data={{
                                datasets: [
                                    {
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                        borderColor: "cyan",
                                        data: chartData
                                    }
                                ]
                            }}
                        options={options}/>:""
                }
            </div>
            <div className="app-next">
                <a href="#third"><img id="down" src={down} alt="down"></img></a>
                <a href="#first"><img id="up"src={down} alt="up"></img></a>
            </div>
        </div>
    )
}

export default SecondPage
