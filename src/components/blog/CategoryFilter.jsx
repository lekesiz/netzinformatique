import { Tag, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Category filter component for blog
 * Shows categories with post counts and allows filtering
 */
const CategoryFilter = ({
  categories,
  categoryCounts,
  selectedCategory,
  onCategoryChange,
  className = ''
}) => {
  const { t } = useTranslation()

  if (!categories || categories.length === 0) return null

  return (
    <div className={`space-y-3 ${className}`}>
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Tag className="w-5 h-5" />
        {t('blog.categories', { defaultValue: 'Categories' })}
      </h3>

      <div className="flex flex-wrap gap-2">
        {/* All categories button */}
        <button
          onClick={() => onCategoryChange(null)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            !selectedCategory
              ? 'bg-primary text-white border-primary'
              : 'border-gray-300 hover:bg-gray-100'
          }`}
        >
          {t('blog.allCategories', { defaultValue: 'All' })}
          {!selectedCategory && categoryCounts && (
            <span className="ml-2 text-sm opacity-80">
              ({Object.values(categoryCounts).reduce((sum, count) => sum + count, 0)})
            </span>
          )}
        </button>

        {/* Individual category buttons */}
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-lg border transition-colors flex items-center gap-2 ${
              selectedCategory === category
                ? 'bg-primary text-white border-primary'
                : 'border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category}
            {categoryCounts && categoryCounts[category] && (
              <span className="text-sm opacity-80">
                ({categoryCounts[category]})
              </span>
            )}
            {selectedCategory === category && (
              <X className="w-4 h-4 ml-1" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter
