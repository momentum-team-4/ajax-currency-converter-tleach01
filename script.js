const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const fromCurrency = document.getElementById('#fromCurrency')
const fromAmount = document.getElementById('#fromAmount')
const toCurrency = document.getElementById('#toCurrency')
const toAmount = document.getElementById('#toAmount')
const rate = document.getElementById('#rate')

fromCurrency.addEventListener('change')
fromAmount.addEventListener('change')
toCurrency.addEventListener('change')
toAmount.addEventListener('change')


function calculate () {
  const fromCurrency = fromCurrency.value
  const toCurrency = toCurrency.value
  fetch('https://api.exchangeratesapi.io/latest')
    .then( function (response) {
      return Response.json()
    })

calculate()


const convert = document.querySelector('#convert-button')
convert.addEventListener('click', function (event) {
  event.preventDefault()
}
)