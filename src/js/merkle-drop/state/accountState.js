import { useState, useEffect } from "react"
import getWeb3, { getDefaultAccount } from "../../common/web3"

export function useAccountState() {
  const [accountState, setAccountState] = useState("")

  useEffect(() => {
    // box variable to make it available in inner function
    const env = {
      checkAccountIntervalId: 0,
    }

    // define async function because effect function can not be async
    async function checkAccount() {
      try {
        if (getWeb3()) {
          // function that periodically checks the chain state
          async function check() {
            try {
              setAccountState(await getDefaultAccount())
            } catch (e) {
              console.error(e)
              // Stop the periodical address check
              clearInterval(env.checkAccountIntervalId)
              setAccountState(undefined)
            }
          }

          env.checkAccountIntervalId = setInterval(check, 500)
          check()
        } else {
          setAccountState(undefined)
        }
      } catch (error) {
        console.log(error)
        setAccountState(undefined)
      }
    }

    checkAccount()
    return () => clearInterval(env.checkAccountIntervalId)
  }, [])
  return accountState
}
