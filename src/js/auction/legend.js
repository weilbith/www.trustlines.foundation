import $ from "jquery"
import { roundUp } from "../common/math"

const currentPrice = $("#current-price")
const currentPriceDesc = $("#current-price-desc")
const weiToggleButton = $("#wei-button")
const ethToggleButton = $("#eth-button")

function calculateRemainingSecondsString(remainingSeconds) {
  if (!remainingSeconds) {
    return undefined
  }
  const s = remainingSeconds % 60
  const m = Math.floor((remainingSeconds % 3600) / 60)
  const h = Math.floor((remainingSeconds % 86400) / 3600)
  const d = Math.floor(remainingSeconds / 86400)
  return `${d}d ${h}h ${m}m ${s}s`
}

export function renderState(chartState) {
  let timeString = chartState.state
  if (timeString === "Started") {
    timeString = calculateRemainingSecondsString(chartState.remainingSeconds)
  }
  $("#remaining-time").html(timeString)
}

export function renderSlots(chartState) {
  $("#slots-taken").html(chartState.takenSlotsCount)
  $("#slots-free").html(chartState.freeSlotsCount)
  $("#slots-max").html(chartState.maxSlotsCount)
  $("#slots-min").html(chartState.minSlotsCount)
}

export function renderCurrentPrice(chartState) {
  let price
  if (
    chartState.state === "Finished" ||
    chartState.state === "Deposit Pending"
  ) {
    currentPriceDesc.html("Lowest Slot Price")
    price = chartState.lowestSlotPriceInWEI
  } else if (chartState.state === "Started") {
    currentPriceDesc.html("Current Slot Price")
    price = chartState.currentPriceInWEI
  } else if (chartState.state === "Not Started") {
    currentPriceDesc.html("Initial Slot Price")
    price = chartState.initialPriceInWEI
  } else {
    currentPriceDesc.hide()
    currentPrice.hide()
    return
  }

  let priceString
  if (chartState.currency === "ETH") {
    priceString = roundUp(price) + " ETH"
  } else {
    priceString = price + " WEI"
  }
  currentPrice.html(priceString)
  currentPriceDesc.show()
  currentPrice.show()
}

function toggleCurrenyClasses(activeSelector, inactiveSelector) {
  activeSelector.addClass("is-selected")
  activeSelector.removeClass("is-outlined")
  inactiveSelector.addClass("is-outlined")
  inactiveSelector.removeClass("is-selected")
}

export default function initLegend(chartState) {
  ethToggleButton.click(() => {
    chartState.setETHCurrency()
    renderCurrentPrice(chartState)
    chartState.updateChart()
    toggleCurrenyClasses(ethToggleButton, weiToggleButton)
  })

  weiToggleButton.click(() => {
    chartState.setWEICurrency()
    renderCurrentPrice(chartState)
    chartState.updateChart()
    toggleCurrenyClasses(weiToggleButton, ethToggleButton)
  })

  setInterval(() => {
    chartState.decrementRemainingSeconds()
    renderState(chartState)
  }, 1000)
}
