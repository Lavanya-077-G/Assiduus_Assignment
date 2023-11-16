import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useContext } from 'react';
import { GraphContext } from '../App';

const StackedBarChart = () => {
  const svgRef = useRef();
  const {graphData} = useContext(GraphContext);
  const {cashFlow: data} = graphData;

  useEffect(() => {

    const width = 600;
    const height = 180;
    const margin = { top: 20, right: 10, bottom: 40, left: 10 };

    svgRef.current.innerHTML = "";

    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const xScale = d3.scaleBand()
      .domain(data.map(d => d.category))
      .range([0, width])
      .padding(0.85);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.value1 + d.value2)])
      .range([height, 0]);
      

    const stack = d3.stack()
      .keys(['value1', 'value2'])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

      const colorScale = d3.scaleOrdinal()
      .domain(['value1', 'value2'])
      .range( ['#02BB7D', '#47B747']);

    const stackedData = stack(data);

    svg.selectAll('g')
      .data(stackedData)
      .enter().append('g')
      .attr('fill', d => colorScale(d.key))
      .selectAll('rect')
      .data(d => d)
      .enter().append('rect')
      .attr('x', d => xScale(d.data.category))
      .attr('y', d => yScale(d[1]))
      .attr('height', d => yScale(d[0]) - yScale(d[1]))
      .attr('width', xScale.bandwidth())
      .attr('rx',  5) 
      .attr('ry', 5);

    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg.select(".domain").remove();

  }, [graphData, data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default StackedBarChart;

