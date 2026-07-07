function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="category-filter">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  )};
 
  export default CategoryFilter