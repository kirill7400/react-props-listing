function Listing({ items }) {
  const titleValidator = (v) => {
    if (v && v.length > 50) {
      v = v.slice(0, 50) + '...'
    }

    return v
  }

  const priceValidator = (num, code) => {
    let price = ''

    if (code === 'USD') price = `$${num}`
    else if (code === 'EUR') price = `€${num}`
    else price = `${num} ${code}`

    return price
  }

  const quantityValidator = (num) => {
    let level = 'level-high'

    if (num <= 10) level = 'level-low'
    else if (num <= 20 && num > 10) level = 'level-medium'

    return level
  }

  let list = items.map(item =>
    <div key={ item.listing_id } className="item">
      <div className="item-image">
        <a href={ item.url }>
          <img src={ item.MainImage?.url_570xN } alt='img'/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{ titleValidator(item.title) }</p>
        <p className="item-price">{ priceValidator(item.price, item.currency_code) }</p>
        <p className={`item-quantity ${ quantityValidator(item.quantity) }`}>{ item.quantity } left</p>
      </div>
    </div>
  )

  return (
    <div className="item-list">
      { list }
    </div>
  )
}

export default Listing