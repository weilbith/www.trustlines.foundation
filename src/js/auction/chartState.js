import { CURRENCY_ETH, CURRENCY_WEI } from "../common/const"

export default class ChartState {
  constructor() {
    this.currency = CURRENCY_ETH
    this.initialPropertiesSet = false
  }

  setETHCurrency() {
    this.currency = CURRENCY_ETH
  }

  setWEICurrency() {
    this.currency = CURRENCY_WEI
  }

  updateChart(params = {}) {
    this.chart.update(params)
  }

  decrementRemainingSeconds() {
    if (this.remainingSeconds) {
      this.remainingSeconds = this.remainingSeconds - 1
    }
  }

  mergeRestResult(result) {
    this.takenSlotsCount = result.takenSlotsCount
    this.freeSlotsCount = result.freeSlotsCount
    this.maxSlotsCount = result.maxSlotsCount
    this.minSlotsCount = result.minSlotsCount
    this.state = result.state
    this.lowestSlotPriceInWEI = result.lowestSlotPriceInWEI
    this.currentPriceInWEI = result.currentPriceInWEI
    this.initialPriceInWEI = result.initialPriceInWEI
    this.currentBlocktimeInMs = result.currentBlocktimeInMs
    if (!this.initialPropertiesSet) {
      this.remainingSeconds = result.remainingSeconds
    }

    this.initialPropertiesSet = true
  }
}
