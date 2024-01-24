import { Row } from 'app/design/layout'
import { Text } from 'app/design/typography'
import { View } from 'app/design/view'
import { useState } from 'react'
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { Searchbar, Button, Menu, Icon, Checkbox } from 'react-native-paper'

const Header = () => {
  const [query, setQuery] = useState('')
  const [openAction, setOpenAction] = useState(false)
  const [openfilter, setOpenfilter] = useState(false)
  const [checked, setChecked] = useState(false)
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setOpenAction(false), setOpenfilter(false)
        Keyboard.dismiss()
      }}
    >
      <View className="flex-1 justify-center p-5 dark:bg-black ">
        <View className="items-center justify-evenly space-y-3 border border-transparent bg-white  p-5 shadow-md   dark:bg-gray-800 lg:flex-row ">
          <Searchbar
            theme={{ colors: { onSurface: 'gray' } }}
            className="w-full rounded-lg bg-gray-100 dark:bg-gray-700 lg:mr-20  lg:flex-auto"
            placeholder="Search"
            onChangeText={setQuery}
            value={query}
          />
          <Button
            icon="plus"
            mode="contained"
            className="bg-primary-700 dark:bg-primary-600 w-full rounded-lg lg:mr-2 lg:w-1/4  "
            onPress={() => console.log('Pressed')}
            textColor="white"
          >
            Add product
          </Button>
          <Row className="w-full justify-between  lg:flex-auto">
            <View className="mr-0.5 flex-auto">
              <Button
                icon="chevron-down"
                mode="contained"
                className=" dark:bg-primary-600 relative  rounded-lg  border border-gray-200 bg-transparent  dark:border-gray-600 "
                onPress={() => setOpenAction(!openAction)}
                textColor="gray"
              >
                Actions
              </Button>
              {openAction && (
                <View className="absolute left-4 top-12 rounded-md bg-white dark:bg-gray-700">
                  {['Mass Edit', 'Delete all'].map((item, i) => (
                    <Menu.Item key={i} onPress={() => {}} title={item} />
                  ))}
                </View>
              )}
            </View>
            <View className="mr-0.5 lg:flex-auto">
              {openfilter && (
                <View className="absolute bottom-12 left-4 min-h-full rounded-md  bg-white dark:bg-gray-800 lg:top-12">
                  <Text className="font-500 p-2 text-lg font-bold dark:text-white">
                    Category
                  </Text>
                  {['Apple', 'Fitbit', 'Dell', 'Asus'].map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      className="flex-row items-center bg-white"
                      onPress={() => setChecked(!checked)}
                    >
                      <Checkbox status={checked ? 'checked' : 'unchecked'} />
                      <Menu.Item
                        className="bg-white dark:bg-gray-800"
                        title={item}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <Button
                icon="filter"
                mode="contained"
                className="ml-0.5 flex-auto rounded-lg border border-gray-200 bg-transparent  dark:border-gray-600"
                onPress={() => setOpenfilter(!openfilter)}
                textColor="gray"
              >
                Filter <Icon source="chevron-down" />
              </Button>
            </View>
          </Row>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export { Header }
