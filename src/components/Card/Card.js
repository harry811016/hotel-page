import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'

const CardContainer = styled.div`
  padding: 5rem;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
`

const CardItem = styled.div`
  width: 850px;
  height: 250px;
  border-radius: 8px;
  border: 1px solid transparent;
  box-shadow: 0 0 2px 0 rgba(19,26,31,0.12),0 2px 4px 0 rgba(19,26,31,0.22);
  margin-bottom: 2rem;
  display: flex;

  .img{
    img{
      width: 250px;
      height: 250px;
      border-bottom-left-radius: 8px;
      border-top-left-radius: 8px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

  .info {
    padding: 1rem 2rem;
    width: 300px;
    height: 180px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    position: relative;

    &__main {
      &__name {
        font-size: 1.5rem;
        font-weight: 600;
      }

      &__address {
        font-size: 0.75em;
        padding: 0.5rem 0;
        word-wrap: normal;
      }

      &__stars {
        color: rgb(254, 186, 2);
      }
    }

    &__rating {
      color: #ffffff;
      width: 30px;
      height: 30px;
      line-height: 30px;
      font-weight: 600;
      text-align: center;
      background-color: #003580;
      border-radius: 8px;
    }

    &:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-right: 1px solid rgba(200, 200, 200, 0.5);
      margin: auto 0;
    }

    &:after{
      content: '';
      width: 95%;
      height: 0px;
      border-bottom: 1px solid rgba(200, 200, 200, 0.5);
      margin: 0 auto;
    }
  }
`




const Card = (props) => {
  const [hoteldata, setHoteldata] = useState([])
  useEffect(() => {
    fetch('https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/tokyo').then(res => res.json()
    ).then(data => {
      console.log(data)
      setHoteldata(data)
    })
  }, [])

  const starConverter = (stars) => {
    stars = Math.round(stars)
    let str = ''
    for (let i = 0; i < stars; i++) {
      str += '★'
    }
    return str
  }

  return (
    <CardContainer>
      {hoteldata.map(item => {
        return (
          <CardItem >
            <div className="img"><img src={item.photo} alt="" /></div>
            <div className="info">
              <div className="info__main">
                <div className="info__main__name">{item.name}</div>
                <div className="info__main__address">{item.address}</div>
                <div className="info__main__stars">{starConverter(item.stars)}</div>
              </div>
              <div className="info__rating">{item.rating}</div>
            </div>
            <div className="price">
            </div>
          </CardItem>
        )
      })
      }
    </CardContainer>
  )
}

export default Card