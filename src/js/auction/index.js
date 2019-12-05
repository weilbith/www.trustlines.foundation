import $ from "jquery"
import initCollapsibles from "./collapsibles"
import initModal from "./termsAndConditionsModal"
import initChart from "./chart"
import initLegend from "./legend"
import ChartState from "./chartState"

$(() => {
  const chartState = new ChartState()

  initCollapsibles()
  initModal()
  initLegend(chartState)
  initChart(chartState)
})
