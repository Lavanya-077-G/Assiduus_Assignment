import React, { useContext, useEffect, useRef,useMemo } from 'react';
import * as d3 from 'd3';
import '../App.scss';
import { GraphContext } from '../App';

const LineChart = () => {
  const {graphData} = useContext(GraphContext);
  const {checkingAccount: data} = graphData;
  const xaxies = useMemo(()=> [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],[]);
  const svgRef = useRef();

  useEffect(() => {
    const w = 600;
    const h = 180;
    const svg = d3
      .select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('background', '#FFFFFF')
      .style('margin', '9');
  
    const xScale = d3.scaleLinear()
    .domain([d3.min(xaxies), d3.max(xaxies)])
    .range([0, w]);
    
    const yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([h, 0]);
  
    const xAxis = d3.axisBottom(xScale);
  
    svg.append('g').call(xAxis).attr('transform', `translate(0, ${h})`);
  
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(xaxies[i]))
      .y((d) => yScale(d))
      .curve(d3.curveCardinal);
  
    const line = svg.selectAll('.line').data([data]);
  
    line.attr('d', (d) => generateScaledLine(d))
    .attr('fill', 'none')
    .attr('stroke', '#02BB7D');

    line.enter()
    .append('path')
    .attr('class', 'line')
    .attr('d', (d) => generateScaledLine(d)).attr('fill', 'none')
    .attr('stroke', '#02BB7D');
    
    line.exit().remove();
  
    svg.select('.domain').remove();

  }, [data, xaxies]);

  return (
    <div>
      <svg ref={svgRef} style={{ margin: '20px', display: 'block' }}></svg>
    </div>
  );
};

export default LineChart;

