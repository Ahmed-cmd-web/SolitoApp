import { View } from 'app/design/view'
import { TableHeader } from '../AdvancedTable/index.native'

const Header = () => {
  return (
    <View className="flex-1  justify-center dark:bg-black p-5">
      <TableHeader />
    </View>
  )
}

export { Header }
