// Data for bar chart.
const data = [
    { month: "JAN", value: 2.88 },
    { month: "FEB", value: 2.74 },
    { month: "MAR", value: 2.88 },
    { month: "APR", value: 3.80 },
    { month: "MAY", value: 2.73 },
    { month: "JUN", value: 3.84 },
    { month: "JUL", value: 4.08 },
    { month: "AUG", value: 3.33 },
    { month: "SEP", value: 3.28 },
    { month: "OCT", value: 4.69 },
    { month: "NOV", value: 3.61 },
    { month: "DEC", value: 4.91 }
];

// Get the dimensions of the SVG.
const margin = { top: 100, right: 20, bottom: 100, left: 100 };
const width = 1400 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

// Create SVG element
const svg = d3.select("#bar-chart-2")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(150, 800)");

// Create the y-axis scale.
const y = d3.scaleBand()
    .domain(data.map(d => d.month))
    .range([0, height])
    .padding(0.3);

// Create the X-axis scale.
const x = d3.scaleLinear()
    .domain([0, 5])
    .range([0, width]);

// Draw bars
svg.selectAll("rect")
    .data(data)
    .enter().append("rect")
    .attr("y", d => y(d.month))
    .attr("x", 0)
    .attr("width", d => x(d.value))
    .attr("height", y.bandwidth())
    .attr("fill", d => {
        if (d.value >= 3.8) {
            return "#2991f2";
        } else {
            return "lightgray";
        }
    });

// Add text labels on top of each bar
svg.selectAll(".bar-label")
    .data(data)
    .enter().append("text")
    .attr("class", "bar-label")
    .attr("x", d => x(d.value) + 10)
    .attr("y", d => y(d.month) + y.bandwidth() / 2 - 5)
    .attr("dy", "0.35em")
    .attr("fill", "white")
    .text(d => d.value + " in")
    .attr("font-family", "Times New Roman")
    .attr("font-weight", d => {
        if (d.value >= 3.8) {
            return "bold";
        } else {
            return "normal";
        }
    })
    .attr("font-size", d => {
        if (d.value >= 3.8) {
            return "60px";
        } else {
            return "26px";
        }
    });

// Draw X-axis
svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5))
    .attr("font-size", "30px")
    .attr("font-family", "Times New Roman");

// Draw Y-axis
svg.append("g")
    .call(d3.axisLeft(y))
    .attr("font-size", "30px")
    .attr("color", "white")
    .attr("font-family", "Times New Roman");

// Draw X-axis label
svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + 60)
    .attr("text-anchor", "middle")
    .attr("font-size", "36px")
    .attr("fill", "white")
    .attr("font-weight", "bold")
    .text("Inches");