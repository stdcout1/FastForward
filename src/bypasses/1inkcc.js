import BypassDefinition from "./BypassDefinition.js"

export default class OneInk extends BypassDefinition {
    constructor() {
        super()
    }

    execute() {
        const link = document.querySelector("a#countingbtn[href]")
        if (link) {
          this.helpers.safelyNavigate(link.href)
        }
    }
}

export const matches = ["1ink.cc"]
