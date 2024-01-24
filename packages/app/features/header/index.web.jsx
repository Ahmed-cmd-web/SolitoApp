import { TableHeader } from '../AdvancedTable/index.web'

const items = ['Apple (56)', 'Fitbit (56)', 'Dell (56)', 'Asus (97)']
const Header = ({ filterTitle = 'Category', filterItems = items }) => {
  return (
    <section class="flex h-screen items-center bg-gray-50 dark:bg-gray-900">
      <div class="mx-auto w-full max-w-screen-xl px-4 lg:px-12">
        <TableHeader filterItems={filterItems} filterTitle={filterTitle} />
      </div>
    </section>
  )
}

export { Header }
