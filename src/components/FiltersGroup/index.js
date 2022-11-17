import './index.css'
import {BsSearch} from 'react-icons/bs'
import RatingFilter from '../RatingFilter'
import CategoryFilter from '../CategoryFilter'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeCategory,
    activeCategory,
    activeRating,
    changeRating,
    clearFilters,
    changeTitleSearch,
  } = props

  let enteredText = ''

  const onClickingClearFilters = () => {
    clearFilters()
  }

  const onChangingSearchInput = event => {
    enteredText = event.target.value
  }

  const onPressingKey = event => {
    if (event.key === 'Enter' && enteredText !== '') {
      changeTitleSearch(enteredText)
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={onChangingSearchInput}
          onKeyDown={onPressingKey}
        />
        <BsSearch className="search-icon" />
      </div>
      <div>
        <h1 className="filter-heading">Category</h1>
        <ul className="filter-list-container">
          {categoryOptions.map(
            eachCategory => (
              <CategoryFilter
                key={eachCategory.categoryId}
                category={eachCategory}
                changeCategory={changeCategory}
                activeCategory={activeCategory}
              />
            ),
            /* <li
              className="filter-item"
              onClick={onSelectingCategory}
              value={eachCategory.categoryId}
              key={eachCategory.categoryId}
            >
              <p>{eachCategory.name}</p>
            </li> */
          )}
        </ul>
      </div>
      <div>
        <h1 className="filter-heading">Rating</h1>
        <ul className="filter-list-container">
          {ratingsList.map(
            eachRating => (
              <RatingFilter
                key={eachRating.ratingId}
                rating={eachRating}
                activeRating={activeRating}
                changeRating={changeRating}
              />
            ),

            /* <li className="rating-item" key={eachRating.ratingId}>
              <img
                src={eachRating.imageUrl}
                alt={`rating ${eachRating.ratingId}`}
                className="rating-image"
              />
              <p className="filter-item">& up</p>
            </li> */
          )}
        </ul>
      </div>
      <button
        type="button"
        className="clear-filter-button"
        onClick={onClickingClearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
