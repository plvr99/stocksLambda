import returnStockByIdPort from "../ports/returnStockByIdPort.js"

const currencies = [{ id: 0, currency: 'AED' },
{ id: 1, currency: 'AFN' },
{ id: 2, currency: 'ALL' },
{ id: 3, currency: 'AMD' },
{ id: 4, currency: 'ANG' },
{ id: 5, currency: 'AOA' },
{ id: 6, currency: 'ARS' },
{ id: 7, currency: 'AUD' },
{ id: 8, currency: 'AWG' },
{ id: 9, currency: 'AZN' },
{ id: 10, currency: 'BAM' },
{ id: 11, currency: 'BBD' },
{ id: 12, currency: 'BDT' },
{ id: 13, currency: 'BGN' },
{ id: 14, currency: 'BHD' },
{ id: 15, currency: 'BIF' },
{ id: 16, currency: 'BMD' },
{ id: 17, currency: 'BND' },
{ id: 18, currency: 'BOB' },
{ id: 19, currency: 'BRL' },
{ id: 20, currency: 'BSD' },
{ id: 21, currency: 'BTN' },
{ id: 22, currency: 'BWP' },
{ id: 23, currency: 'BYN' },
{ id: 24, currency: 'BZD' },
{ id: 25, currency: 'CAD' },
{ id: 26, currency: 'CDF' },
{ id: 27, currency: 'CHF' },
{ id: 28, currency: 'CLP' },
{ id: 29, currency: 'CNY' },
{ id: 30, currency: 'COP' },
{ id: 31, currency: 'CRC' },
{ id: 32, currency: 'CUP' },
{ id: 33, currency: 'CVE' },
{ id: 34, currency: 'CZK' },
{ id: 35, currency: 'DJF' },
{ id: 36, currency: 'DKK' },
{ id: 37, currency: 'DOP' },
{ id: 38, currency: 'DZD' },
{ id: 39, currency: 'EGP' },
{ id: 40, currency: 'ERN' },
{ id: 41, currency: 'ETB' },
{ id: 42, currency: 'EUR' },
{ id: 43, currency: 'FJD' },
{ id: 44, currency: 'FKP' },
{ id: 45, currency: 'FOK' },
{ id: 46, currency: 'GBP' },
{ id: 47, currency: 'GEL' },
{ id: 48, currency: 'GGP' },
{ id: 49, currency: 'GHS' },
{ id: 50, currency: 'GIP' },
{ id: 51, currency: 'GMD' },
{ id: 52, currency: 'GNF' },
{ id: 53, currency: 'GTQ' },
{ id: 54, currency: 'GYD' },
{ id: 55, currency: 'HKD' },
{ id: 56, currency: 'HNL' },
{ id: 57, currency: 'HRK' },
{ id: 58, currency: 'HTG' },
{ id: 59, currency: 'HUF' },
{ id: 60, currency: 'IDR' },
{ id: 61, currency: 'ILS' },
{ id: 62, currency: 'IMP' },
{ id: 63, currency: 'INR' },
{ id: 64, currency: 'IQD' },
{ id: 65, currency: 'IRR' },
{ id: 66, currency: 'ISK' },
{ id: 67, currency: 'JEP' },
{ id: 68, currency: 'JMD' },
{ id: 69, currency: 'JOD' },
{ id: 70, currency: 'JPY' },
{ id: 71, currency: 'KES' },
{ id: 72, currency: 'KGS' },
{ id: 73, currency: 'KHR' },
{ id: 74, currency: 'KID' },
{ id: 75, currency: 'KMF' },
{ id: 76, currency: 'KRW' },
{ id: 77, currency: 'KWD' },
{ id: 78, currency: 'KYD' },
{ id: 79, currency: 'KZT' },
{ id: 80, currency: 'LAK' },
{ id: 81, currency: 'LBP' },
{ id: 82, currency: 'LKR' },
{ id: 83, currency: 'LRD' },
{ id: 84, currency: 'LSL' },
{ id: 85, currency: 'LYD' },
{ id: 86, currency: 'MAD' },
{ id: 87, currency: 'MDL' },
{ id: 88, currency: 'MGA' },
{ id: 89, currency: 'MKD' },
{ id: 90, currency: 'MMK' },
{ id: 91, currency: 'MNT' },
{ id: 92, currency: 'MOP' },
{ id: 93, currency: 'MRU' },
{ id: 94, currency: 'MUR' },
{ id: 95, currency: 'MVR' },
{ id: 96, currency: 'MWK' },
{ id: 97, currency: 'MXN' },
{ id: 98, currency: 'MYR' },
{ id: 99, currency: 'MZN' },
{ id: 100, currency: 'NAD' },
{ id: 101, currency: 'NGN' },
{ id: 102, currency: 'NIO' },
{ id: 103, currency: 'NOK' },
{ id: 104, currency: 'NPR' },
{ id: 105, currency: 'NZD' },
{ id: 106, currency: 'OMR' },
{ id: 107, currency: 'PAB' },
{ id: 108, currency: 'PEN' },
{ id: 109, currency: 'PGK' },
{ id: 110, currency: 'PHP' },
{ id: 111, currency: 'PKR' },
{ id: 112, currency: 'PLN' },
{ id: 113, currency: 'PYG' },
{ id: 114, currency: 'QAR' },
{ id: 115, currency: 'RON' },
{ id: 116, currency: 'RSD' },
{ id: 117, currency: 'RUB' },
{ id: 118, currency: 'RWF' },
{ id: 119, currency: 'SAR' },
{ id: 120, currency: 'SBD' },
{ id: 121, currency: 'SCR' },
{ id: 122, currency: 'SDG' },
{ id: 123, currency: 'SEK' },
{ id: 124, currency: 'SGD' },
{ id: 125, currency: 'SHP' },
{ id: 126, currency: 'SLL' },
{ id: 127, currency: 'SOS' },
{ id: 128, currency: 'SRD' },
{ id: 129, currency: 'SSP' },
{ id: 130, currency: 'STN' },
{ id: 131, currency: 'SYP' },
{ id: 132, currency: 'SZL' },
{ id: 133, currency: 'THB' },
{ id: 134, currency: 'TJS' },
{ id: 135, currency: 'TMT' },
{ id: 136, currency: 'TND' },
{ id: 137, currency: 'TOP' },
{ id: 138, currency: 'TRY' },
{ id: 139, currency: 'TTD' },
{ id: 140, currency: 'TVD' },
{ id: 141, currency: 'TWD' },
{ id: 142, currency: 'TZS' },
{ id: 143, currency: 'UAH' },
{ id: 144, currency: 'UGX' },
{ id: 145, currency: 'USD' },
{ id: 146, currency: 'UYU' },
{ id: 147, currency: 'UZS' },
{ id: 148, currency: 'VES' },
{ id: 149, currency: 'VND' },
{ id: 150, currency: 'VUV' },
{ id: 151, currency: 'WST' },
{ id: 152, currency: 'XAF' },
{ id: 153, currency: 'XCD' },
{ id: 154, currency: 'XDR' },
{ id: 155, currency: 'XOF' },
{ id: 156, currency: 'XPF' },
{ id: 157, currency: 'YER' },
{ id: 158, currency: 'ZAR' },
{ id: 159, currency: 'ZMW' },
{ id: 160, currency: 'ZWL' }]


async function retriveStockValues(id) {
    const value = currencies.find(currency => currency.id == id);
    if (value) {
        try {
            const currencyList = await returnStockByIdPort(value.currency);
            let result = {
                id: id,
                currency: currencyList.base_code,
                exchangeRates: currencyList.rates
            }
            return result;
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default retriveStockValues;