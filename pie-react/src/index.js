import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Pie } from "react-chartjs-2";
import "./index.css";

const Chart = () => {
    const [chartData, setChartData] = useState({});

    const circle = () => {
        setChartData({
            labels: ["sample1", "sample2", "sample3", "sample4"],
            datasets: [
                {
                    label: "$USD",
                    data: [45, 79, 23, 165],
                    backgroundColor: [
                        "#00ff80",
                        "#00ffff",
                        "#007fff",
                        "#0000ff",
                        "#8000ff",
                        "#ff00ff",
                        "#ff0080",
                        "#ff0000",
                        "#ff8000",
                        "#ffff00",
                        "#80ff00",
                        "#00ff00",
                    ],
                    borderWidth: 4,
                },
            ],
        });
    };

    useEffect(() => {
        circle();
    }, []);

    return (
        <div className="chart">
            <Pie data={chartData} />
        </div>
    );
};

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>PIE</h1>
                <Chart />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
