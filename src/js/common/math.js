import { ETH_BASE } from "./const"

export function roundUp(price) {
  return Math.ceil((price / ETH_BASE) * 1000) / 1000
}
