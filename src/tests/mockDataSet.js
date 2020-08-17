const mockDataSet = {
  set1: {
    currency: 'SGD',
    data: [{
      id: 1,
      name: "hotel name",
      rating: 7.7,
      stars: 4,
      address: "hotel address",
      photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg",
      description: "hotel description",
      price: {
        id: 1,
        price: 100,
        competitionSet: [
          { name: "Our Price", price: 100 },
          { name: "Booking.com", price: 105 }
        ],
        savedCost: 5,
        taxes_and_fees: {
          hotel_fees: 16.4,
          tax: 13.12
        }
      }
    }],
    isLoading: false
  },
  set2: {
    currency: 'KRW',
    data: [{
      id: 1,
      name: "KRW hotel name",
      rating: 1.7,
      stars: 1,
      address: "KRW hotel address",
      photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg",
      description: "KRW hotel description",
      price: {
        id: 1,
        price: 134434.8,
        competitionSet: [
          { name: "Our Price", price: 134434.8 },
          { name: "Expedia", price: 149250.8 }
        ],
        savedCost: 14816
      }
    }],
    isLoading: false
  },
  set3: {
    currency: 'KRW',
    data: [{
      id: 1,
      name: "KRW hotel name",
      rating: 1.7,
      stars: 1,
      address: "KRW hotel address",
      photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg",
      description: "KRW hotel description",
      price: null
    }],
    isLoading: false
  },
  set4: {
    currency: 'KRW',
    data: [{
      id: 1,
      name: "KRW hotel name",
      rating: 0,
      stars: 0,
      address: "KRW hotel address",
      photo: "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg",
      description: "KRW hotel description",
      price: null
    }],
    isLoading: false
  }
}

export default mockDataSet