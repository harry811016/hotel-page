import React from 'react'
import styled from '@emotion/styled'

const CardContainer = styled.div`
  padding: 7rem 0 5rem;
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
    /* height: 180px; */
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

    &__competitors{
      width: 100%;
      align-items: flex-end;
      display: flex;
      justify-content: flex-start;
      overflow-y: hidden;
      overflow-x: auto;
      border-top: 1px solid rgba(200, 200, 200, 0.5);
      padding-top: 10px;

      &__item {
        height: 45px;
        padding: 0 1rem;
        font-size: 0.7rem;
        line-height: 0.7rem;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        white-space: nowrap;

        .name {
          font-weight: 800;
          margin-bottom: -0.5rem;
        }
      }

      &__item.highlight {
        border-radius: 5px;
        color: #008009;
        background-color: rgba(0,128,9,0.05);
        }
    }
  }

  .deal{
    display: flex;
    flex-flow: column-reverse;
    margin: 1rem auto;
    position: relative;
    border-left: 1px solid rgba(200, 200, 200, 0.5);
    padding-left: 1rem;

    &__price {
      font-weight: 750;
      font-size: 1.25rem;

      &__tax {
        display: flex;
        flex-flow: column;
        justify-content: flex-start;
        height: 15px;
        font-weight: 400;
        font-size: 0.8rem;
        line-height:  0.8rem;
        margin: -0.5rem 0 1rem;

        p {
          border-bottom: 1px dotted #000000;
        }
      }
    }

    &__button {
      color: #ffffff;
      background-color: #333333;
      border-radius: 2px;
      width: 120px;
      height: 35px;
      line-height: 35px;
      font-weight: 600;
      text-align: center;
      margin-top: 0.6rem;
      box-shadow: 0 0 2px 0 rgba(19,26,31,0.12),0 2px 4px 0 rgba(19,26,31,0.22);
    }

    &__button.cursor{
      cursor: pointer;
      background-color: #ff690f;
      &:hover {
        transform: scale(1.05);
      }
    }

    &__savedCost {
      color: #bf323b;
      font-size: 0.8rem;
      line-height: 0.8rem;
      margin: 0.5rem 0;

      &--highlight {
        font-weight: 800;
      }

      &--strikethrough {
        font-style: italic;
        text-decoration: line-through;
        font-weight: 400;
        margin-right: 1rem;
      }
    }
  }

  .tooltip {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .tooltip {
    .tooltiptext {
      visibility: hidden;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      width: 120px;
      /* color: #008009; */
      background-color: rgba(0,128,9,0.25);
      text-align: center;
      border-radius: 6px;
      padding: 0.5rem;
      font-size: 0.8rem;
      
      position: absolute;
      transform: translate(-110%, -100%);
      z-index: 1;

      p {
        line-height: 0px;
        font-weight: 600;
      }
    }
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`

const Card = (props) => {
  const hoteldata = props.hoteldata
  const starConverter = (stars) => {
    stars = Math.round(stars)
    let str = ''
    for (let i = 0; i < stars; i++) {
      str += '★'
    }
    return str
  }

  const priceConverter = (currency, price) => {
    price = Math.round(price)

    if (['KRW', 'JPY', 'IDR'].includes(currency,)) {
      price = price.toLocaleString()
    }

    return `${currency} ${price}`
  }

  return (
    <CardContainer>
      {hoteldata.map(item => {
        return (
          <CardItem key={item.id}>
            <div className="img"><img src={item.photo} alt="" /></div>
            <div className="info">
              <div className="info__main">
                <div className="info__main__name">{item.name}</div>
                <div className="info__main__address">{item.address}</div>
                <div className="info__main__stars">{starConverter(item.stars)}</div>
              </div>
              <div className="info__rating">{item.rating}</div>
              <div className="info__competitors">
                {item.price && item.price.competitionSet.length > 1 && item.price.savedCost > 0 ? (item.price.competitionSet.map(item => {
                  if (item.name === 'Our Price') {
                    return (<div className="info__competitors__item highlight">
                      <p className='name'>{item.name}</p>
                      <p className='price'>{Math.round(item.price).toLocaleString()}</p>
                    </div>)
                  } else {
                    return (<div className="info__competitors__item">
                      <p className='name'>{item.name}</p>
                      <p className='price'>{Math.round(item.price).toLocaleString()}</p>
                    </div>)
                  }
                })) : ''}
              </div>
            </div>
            <div className="deal">

              {item.price ? (
                <div className="deal__button cursor">
                  Book now!
                </div>) : (
                  <div className="deal__button">
                    Unavailable
                  </div>)}

              <div className="deal__price">
                <div class="tooltip">
                  {item.price ? priceConverter(props.currency, item.price.price) : ''}

                  {item.price && item.price.taxes_and_fees ? (<div className="deal__price__tax">
                    <p>*tax-inclusive</p>
                  </div>) : ''}
                  {item.price && item.price.taxes_and_fees ? (
                    <span class="tooltiptext">
                      <p className='fees'>{item.price.taxes_and_fees.tax ? `tax: $${item.price.taxes_and_fees.tax}` : ''}</p>
                      <p className='fees'>{item.price.taxes_and_fees.hotel_fees ? `hotel fees: $${item.price.taxes_and_fees.hotel_fees}` : ''}</p>
                    </span>) : ''}
                </div>
              </div>

              {item.price && item.price.savedCost > 0 ? (
                <div className="deal__savedCost">
                  <span className="deal__savedCost--strikethrough">${Math.round(item.price.savedCost + item.price.price).toLocaleString()}</span>
                  <span className="deal__savedCost--highlight">Save {(100 * item.price.savedCost / item.price.price).toFixed(1)}% !</span>
                </div>) : ''}

            </div>
          </CardItem>
        )
      })
      }
    </CardContainer>
  )
}

export default Card