import * as S from './chart.styles.ts'

import clsx from 'clsx'
import { FC, HTMLAttributes, useEffect, useRef } from 'react'
import { axisBottom, axisLeft, max, scaleLinear, select } from 'd3'

interface ChartProps extends HTMLAttributes<HTMLDivElement> {}

export const Chart: FC<ChartProps> = ({ className, children, ...props }) => {
  const svgContainerRef = useRef(null)

  const height = 500
  const width = 1000

  // Step 1c: prepare data - create padding
  const padding = 60

  // Step 1a: prepare data - define dataset
  const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123],
  ]

  // Step 2a: create scale - xScale
  const xScale = scaleLinear()
    .domain([0, max(dataset, (d) => d[0]) || 0])
    .range([padding, width - padding])
  // Step 2b: create scale - yScale
  const yScale = scaleLinear()
    .domain([0, max(dataset, (d) => d[1]) || 0])
    .range([height - padding, padding])

  useEffect(() => {
    const container = select(svgContainerRef.current)

    if (container.select('svg').empty()) {
      // Step 1b: prepare data - create SVG container
      const svg = container
        .append('svg')
        .attr('width', width)
        .attr('height', height)

      // Step 3: plot chart
      svg
        .selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
        .attr('cx', (d) => xScale(d[0]))
        .attr('cy', (d) => yScale(d[1]))
        .attr('r', 5)

      // Step 4: add text label
      svg
        .selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .text((d) => `${d[0]}, ${d[1]}`)
        .attr('x', (d) => xScale(d[0] + 5))
        .attr('y', (d) => yScale(d[1]))

      // Step 5a: create axis - xAxis
      const xAxis = axisBottom(xScale)
      svg
        .append('g')
        .call(xAxis)
        .attr('transform', `translate(0, ${height - padding})`)

      // Step 5b: create axis - yAxis
      const yAxis = axisLeft(yScale)
      svg.append('g').call(yAxis).attr('transform', `translate(${padding}, 0)`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xScale, yScale])

  return (
    <S.StyledWrapper
      ref={svgContainerRef}
      className={clsx('chart', className)}
      {...props}
    >
      {children}
    </S.StyledWrapper>
  )
}
