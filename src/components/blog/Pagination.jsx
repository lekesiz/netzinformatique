import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Pagination component for blog posts
 * Supports first/last, prev/next, and page numbers
 */
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  totalPosts,
  startIndex,
  endIndex,
  className = ''
}) => {
  const { t } = useTranslation()

  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5 // Show max 5 page numbers

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)

      if (currentPage > 3) {
        pages.push('...')
      }

      // Show current page and neighbors
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (currentPage < totalPages - 2) {
        pages.push('...')
      }

      // Always show last page
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Results info */}
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {t('blog.pagination.showing', {
          start: startIndex,
          end: endIndex,
          total: totalPosts,
          defaultValue: `Showing ${startIndex}-${endIndex} of ${totalPosts} posts`
        })}
      </p>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        {/* First page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="First page"
          title="First page"
        >
          <ChevronsLeft className="w-5 h-5" />
        </button>

        {/* Previous page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
          title="Previous page"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-1">
          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-3 py-2 text-gray-500"
                >
                  ...
                </span>
              )
            }

            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`min-w-[40px] px-3 py-2 rounded-lg border transition-colors ${
                  currentPage === page
                    ? 'bg-primary text-white border-primary'
                    : 'border-gray-300 hover:bg-gray-100'
                }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )
          })}
        </div>

        {/* Next page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
          title="Next page"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Last page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Last page"
          title="Last page"
        >
          <ChevronsRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
