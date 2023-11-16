import React, { useContext, useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';
import { GraphContext } from '../App';

const BarChart = () => {
  const svgRef = useRef();
  const {graphData} = useContext(GraphContext); 
  const {Invoice: data } = graphData;
  const xaxisData = useMemo(()=> ['older', 'Jan 01-08', 'Jan 17-24', 'Jan 25-31', 'Future'],[]) ;

  useEffect(() => {
    const width = 600;
    const height = 200;
    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    
  
    svgRef.current.innerHTML = "";

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(xaxisData)
      .range([0, width])
      .padding(0.85);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data)])
      .range([height, 0]);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => xScale(xaxisData[i]))
      .attr('y', d => yScale(d))
      .attr('width', xScale.bandwidth())
      .attr('height', d => height - yScale(d))
      .attr('fill', '#02BB7D')
      .attr('rx', 5) 
      .attr('ry', 5); 
      svg.select(".domain").remove();

  }, [data, xaxisData]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default BarChart;

