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
  position: relative;

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

  .description {
    height: 250px;
    width: calc(106%);
    top: 0;
    left: 0;
    position: absolute;
    padding: 0.75rem;
    background-color: ${props => props.theme.colors.white};
    z-index: 200;
    overflow-y: auto;

    &__text {
      flex: 0 0 95%;
      font-size: 0.75rem;
      padding-right: 0.25rem;
      font-weight: 400;
    }

    &__button {
      flex: 0 0 5%;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.8rem;
      color: ${props => props.theme.colors.dark_blue};
      border-radius: 8px;
      margin: 0 auto;
      padding-left: 0.25rem;
      font-weight: 1000px;
      text-align: center;
      cursor: pointer;
    }
  }

  .info {
    padding: 1rem 2rem;
    width: 400px;
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
        color:  ${props => props.theme.colors.dark_yellow};
      }
    }

    &__bottomWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      margin-bottom: 0.5rem;

      &__rating {
        color: #ffffff;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-weight: 600;
        text-align: center;
        background-color: ${props => props.theme.colors.dark_blue};
        border-radius: 8px;
      }

      &__more {
        display: flex;
        align-items: flex-end;
        height: 100%;
        color:  ${props => props.theme.colors.dark_blue};
        font-size: 0.8rem;
        font-style: italic;
        cursor: pointer;
      }
    }

    &__competitors{
      width: 100%;
      align-items: flex-end;
      display: flex;
      justify-content: flex-start;
      overflow-y: hidden;
      overflow-x: auto;
      border-top: 1px solid ${props => props.theme.colors.bg_grey};
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
        color: ${props => props.theme.colors.dark_green};
        background-color: ${props => props.theme.colors.bg_green};
        }
    }
  }

  .deal{
    display: flex;
    flex-flow: column-reverse;
    margin: 1rem auto;
    position: relative;
    border-left: 1px solid ${props => props.theme.colors.bg_grey};
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
          border-bottom: 1px dotted ${props => props.theme.colors.black};
        }
      }
    }

    &__button {
      color:  ${props => props.theme.colors.white};
      background-color:  ${props => props.theme.colors.dark_grey};
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
      background-color: ${props => props.theme.colors.main_color};
      &:hover {
        transform: scale(1.05);
      }
    }

    &__savedCost {
      color: ${props => props.theme.colors.dark_red};
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
      width: 150px;
      background-color: ${props => props.theme.colors.white};
      border: 1px solid ${props => props.theme.colors.dark_yellow};
      border-radius: 5px;
      text-align: center;
      border-radius: 6px;
      padding: 0.5rem;
      font-size: 0.8rem;
      
      position: absolute;
      transform: translate(-105%, -100%);
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

  const showDescription = (e) => {
    const id = Number(e.target.id)
    const modal = e.target.nextSibling
    const [text, closeBtn] = e.target.nextSibling.children

    // insert HTML content
    let data = hoteldata.filter(item => item.id === id)
    data = data[0].description.replace(/<br>/g, '')
    text.innerHTML = data

    // open modal
    modal.classList.remove('d-none')

    // close modal
    closeBtn.addEventListener('click', () => {
      modal.scrollTop = 0
      text.innerHTML = ''
      modal.classList.add('d-none')
    })
  }

  return (
    <CardContainer>
      {hoteldata.map(item => {
        return (
          <CardItem key={item.id}>
            {/* Left part - pciture */}
            <div className="img"><img src={item.photo} alt="" /></div>

            {/* Middle part - hotel and competitor info */}
            <div className="info">
              <div className="info__main">
                <div className="info__main__name" data-testid="name">{item.name}</div>
                <div className="info__main__address" data-testid="address">{item.address}</div>
                {item.stars || item.stars === 0 ? (<div className="info__main__stars" data-testid="stars">{starConverter(item.stars)}</div>) : ''}
              </div>
              <div className="info__bottomWrapper">
                {item.rating || item.rating === 0 ? (<div className="info__bottomWrapper__rating" data-testid="rating">{item.rating}</div>) : ''}
                <div className="info__bottomWrapper__more" onClick={showDescription} id={item.id} data-testid="more">see more</div>

                {/* description */}
                <div className="description d-none" >
                  <div className="description__text" data-testid="description">
                  </div>
                  <div className="description__button" data-testid="description-btn">back</div>
                </div>
              </div>

              {/* competitors */}
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

            {/* Right part - price and CTA button */}
            <div className="deal" data-testid="deal">
              {item.price ? (
                <div className="deal__button cursor" data-testid="cta-btn">
                  Book now!
                </div>) : (
                  <div className="deal__button">
                    Unavailable
                  </div>)}

              <div className="deal__price">
                <div className="tooltip" >
                  {item.price ? (
                    <span data-testid="price">{priceConverter(props.currency, item.price.price)}</span>
                  ) : ''}

                  {item.price && item.price.taxes_and_fees ? (<div className="deal__price__tax" data-testid="tax-included-msg">
                    <p>*tax-inclusive</p>
                  </div>) : ''}
                  {item.price && item.price.taxes_and_fees ? (
                    <span className="tooltiptext">
                      <p className='fees' data-testid="tax">{item.price.taxes_and_fees.tax ? `tax: $${item.price.taxes_and_fees.tax}` : ''}</p>
                      <p className='fees' data-testid="hotel-fee">{item.price.taxes_and_fees.hotel_fees ? `hotel fees: $${item.price.taxes_and_fees.hotel_fees}` : ''}</p>
                    </span>) : ''}
                </div>
              </div>

              {item.price && item.price.savedCost > 0 ? (
                <div className="deal__savedCost">
                  <span className="deal__savedCost--strikethrough" data-testid="expensive-price">${Math.round(item.price.savedCost + item.price.price).toLocaleString()}</span>
                  <span className="deal__savedCost--highlight" data-testid="saved-percentage">Save {(100 * item.price.savedCost / item.price.price).toFixed(1)}% !</span>
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