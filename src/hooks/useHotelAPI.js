import { useCallback, useEffect, useState } from 'react'

const fetchHotel = () => {
  return fetch('https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo')
    .then(res => res.json())
    .then(data => {
      return data
    }).catch(err => {
      return []
    })
}

const fetchPrice = (currency) => {
  return fetch(`https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo/1/${currency}`)
    .then(res => res.json())
    .then(data => {
      return data
    }).catch(err => {
      return []
    })
}

const useHotelAPI = (currency) => {
  const [hoteldata, setHoteldata] = useState({
    isLoading: true,
    currency: currency,
    data: []
  })

  const fetchHoteldata = useCallback(async () => {
    const infoData = await fetchHotel()
    const originalPriceData = await fetchPrice(currency)

    if (infoData.length > 0) {
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
      setHoteldata({
        isLoading: false,
        currency: currency,
        data: availableData
      })
    } else {
      setHoteldata({
        isLoading: false,
        currency: currency,
        data: []
      })
    }
  }, [currency])

  useEffect(() => {
    fetchHoteldata()
  }, [fetchHoteldata])

  return [hoteldata, fetchHoteldata]
}

export default useHotelAPI