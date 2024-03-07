// Source: https://vega.github.io/vega-lite/usage/embed.html
//         https://vega.github.io/vega-lite/examples/bar_aggregate.html

var vega = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "description": "Average Rainfall (in inches) in South End, Boston, by Month, from 2011 to 2023",
    "height": { "step": 40 },
    "width": 1200,
    "data": {
      "values": [
        { "month": "JAN", "value": 2.88 },
        { "month": "FEB", "value": 2.74 },
        { "month": "MAR", "value": 2.88 },
        { "month": "APR", "value": 3.80 },
        { "month": "MAY", "value": 2.73 },
        { "month": "JUN", "value": 3.84 },
        { "month": "JUL", "value": 4.08 },
        { "month": "AUG", "value": 3.33 },
        { "month": "SEP", "value": 3.28 },
        { "month": "OCT", "value": 4.69 },
        { "month": "NOV", "value": 3.61 },
        { "month": "DEC", "value": 4.91 }
      ]
    },
    "mark": "bar",
    "encoding": {
      "x": { 
        "field": "value", 
        "type": "quantitative", 
        "axis": { 
            "title": "Inches",
            "titleFontSize": 20,
            "labelFontSize": 18,
            "tickCount": 5,
        },
        "scale": { "domain": [0, 5] }
 
      },
      "y": { 
        "field": "month", 
        "type": "ordinal",
        "sort": { "order": ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"] },  
        "axis": { 
            "title": null,
            "labelFontSize": 18
        } 
      },
      "color": {
        "condition": {
          "test": "datum.value >= 3.8",
          "value": "#2991f2"
        },
        "condition": {
            "test": "datum.value < 3.8",
            "value": "gray"
        }
      },
      "text": { 
        "field": "value", 
        "type": "quantitative", 
        "format": "{value} in", 
        "align": "left" 
      }
    }
  }
  vegaEmbed("#vis", vega);