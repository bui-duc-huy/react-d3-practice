import React, { useEffect, useRef, useState } from 'react';
import { select, scaleLinear, max, scaleBand, axisLeft, axisBottom, format } from 'd3'
import { data } from './data/dataBasicChart'

function BasicChart() {
  const svgRef = useRef()

  const canvasHeight = 400
  const canvasWidth = 900
  const margin = {
    top: 40,
    bottom: 20,
    left: 50,
    right: 40,
  }

  function drawBarChar(svgCanvas) {
    const xScale = scaleLinear()
      .domain([0, max(data, d => d.sale)])
      .range([0, canvasWidth - margin.left - margin.right])

    const yScale = scaleBand()
      .domain(data.map(d => d.stock))
      .range([0, canvasHeight - margin.top - margin.bottom])
      .padding(0.1)

    const g = svgCanvas.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    g.append('g').call(axisLeft(yScale))
    g.append('g').call(axisBottom(xScale).tickSize(-(canvasHeight - margin.top - margin.bottom)))
      .attr('transform', `translate(0, ${canvasHeight - margin.top - margin.bottom})`)

    g.selectAll('rect')
      .append('rect')
      .data(data)
      .join('rect')
      .attr('fill', 'steelblue')
      .attr('y', d => yScale(d.stock))
      .attr('width', d => xScale(d.sale))
      .attr('height', yScale.bandwidth())

    g.append('text')
      .attr('y', -10)
      .text('Basic chart')
  }

  useEffect(() => {
    // draw canvas
    const svgCanvas = select(svgRef.current)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .attr('margin', 10)
      .style('border', '1px solid black')

    drawBarChar(svgCanvas)
    return () => {
      // remove canvas
      svgCanvas.remove()
    }
  }, [data])

  return (
    <div>
      <div ref={svgRef} style={{
        marginLeft: 10,
        marginTop: 10
      }}></div>
    </div>
  );
}

export default BasicChart;
