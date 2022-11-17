import './index.css'

const CategoryFilter = props => {
  const {category, activeCategory, changeCategory} = props
  const {categoryId, name} = category

  const color = activeCategory === categoryId ? 'active-filter' : ''

  const onClickingCategory = () => {
    changeCategory(categoryId)
  }

  return (
    <li className={`${color} filter-item`} onClick={onClickingCategory}>
      <p>{name}</p>
    </li>
  )
}

export default CategoryFilter
