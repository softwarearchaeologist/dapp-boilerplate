declare module '@metamask/jazzicon' {
  export default function (diameter: number, seed: number): HTMLElement
}

interface Window {
  ethereum?: {
    isMetaMask?: true
    on?: (...args: any[]) => void
    removeListener?: (...args: any[]) => void
    autoRefreshOnNetworkChange?: boolean
  }
  web3?: Record<string, unknown>
}