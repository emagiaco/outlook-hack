var styles = `
    .S0ujU.bQRCo div:nth-child(2), .VPtFl, .pBKjV {
        display: none;
    }
`

let styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.body.appendChild(styleSheet)

console.log('custom css loaded')