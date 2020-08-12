import { useCallback, useEffect, useState } from 'react'


const fetchHotel = () => {
  return fetch('https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo')
    .then(res => res.json())
    .then(data => {
      return data
    })
}

const fetchPrice = (currency) => {
  return fetch(`https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/${currency}`)
    .then(res => res.json())
    .then(data => {
      return data
    })
}

const useHotelAPI = (currency) => {
  const [hoteldata, setHoteldata] = useState([])

  const fetchHoteldata = useCallback(async () => {
    const [infoData, originalPriceData] = await Promise.all([
      fetchHotel(),
      fetchPrice(currency)
    ])

    console.log(infoData)
    console.log(originalPriceData)
    // transform array data to object data
    const priceData = {}
    originalPriceData.forEach(i => {
      let competitorArray = [{ name: 'Our Price', price: i.price }]
      if (i.competitors) {
        for (const prop in i.competitors) {
          let obj = { name: prop, price: i.competitors[prop] }
          competitorArray.push(obj)
        }
      }

      // sort by price
      competitorArray.sort((a, b) => {
        return a.price - b.price
      })
      i.competitionSet = competitorArray

      // calculate saved price
      const savedCost = competitorArray[competitorArray.length - 1].price - i.price
      i.savedCost = savedCost
      priceData[i.id] = i
    })

    // combine info data with price data
    infoData.map(item => {
      item.price = priceData[item.id]
      return item
    })

    // seperate data based on availability
    let unavailableData = []
    let availableData = []

    infoData.forEach(item => {
      if (item.price) {
        availableData.push(item)
      } else {
        unavailableData.push(item)
      }
    })

    // sort by saved cost
    availableData.sort((a, b) => {
      return b.price.savedCost - a.price.savedCost
    })

    availableData = availableData.concat(unavailableData)
    setHoteldata(availableData)
  }, [currency])

  useEffect(() => {
    fetchHoteldata()
  }, [fetchHoteldata])

  return [hoteldata, fetchHoteldata]
}

export default useHotelAPI