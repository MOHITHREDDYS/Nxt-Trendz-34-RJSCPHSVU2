import './index.css'

const RatingFilter = props => {
  const {rating, activeRating, changeRating} = props
  const {ratingId, imageUrl} = rating

  const color = activeRating === ratingId ? 'active-filter' : ''

  const onClickingRating = () => {
    changeRating(ratingId)
  }

  return (
    <li className="rating-item" onClick={onClickingRating}>
      <img src={imageUrl} alt={`rating ${ratingId}`} className="rating-image" />
      <p className={`${color} filter-item`}>& up</p>
    </li>
  )
}

export default RatingFilter
