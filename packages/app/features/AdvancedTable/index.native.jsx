import { AppView } from 'app/design/AppView'
import { DataTable } from 'react-native-paper'
import { ScrollView, useColorScheme } from 'react-native'
import { P, Text } from 'app/design/typography'
import { View } from 'app/design/view'
import {
  Searchbar,
  Button,
  Menu,
  Checkbox,
  IconButton,
} from 'react-native-paper'
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import { useState } from 'react'
import { Row } from 'app/design/layout'
import Icon from 'react-native-vector-icons/FontAwesome5'

const headers = ['PRODUCT NAME', 'CATEGORY', 'BRAND', 'DESCRIPTION', 'PRICE']
const items = [
  {
    product: 'Apple iMac 27"',
    category: 'PC',
    brand: 'Apple',
    description: '300',
    price: '$2999',
  },
]

const ActionsMenu = ({ data }) => {
  const [openAction, setOpenAction] = useState(false)
  const colorScheme = useColorScheme()

  return (
    <Menu
      visible={openAction}
      onDismiss={() => setOpenAction(false)}
      contentStyle={{
        backgroundColor: colorScheme === 'dark' ? 'rgb(31 41 55)' : 'white',
      }}
      anchorPosition="bottom"
      anchor={
        <Icon
          name="ellipsis-h"
          onPress={() => setOpenAction(!openAction)}
          color={
            colorScheme === 'dark' ? 'rgb(107,114,128)' : 'rgb(156,163,175)'
          }
          size={15}
        />
      }
    >
      {data.map((item, i) => (
        <Menu.Item key={i} onPress={() => {}} title={item} />
      ))}
    </Menu>
  )
}
const TableHeader = () => {
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
      <View className=" z-50 justify-center p-0  ">
        <View className="items-center justify-evenly space-y-3 border border-transparent bg-white  p-5   dark:bg-gray-800 lg:flex-row ">
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
                <View className="absolute left-4 top-12 z-50 rounded-md bg-white dark:bg-gray-700">
                  {['Mass Edit', 'Delete all'].map((item, i) => (
                    <Menu.Item key={i} onPress={() => {}} title={item} />
                  ))}
                </View>
              )}
            </View>
            <View className="mr-0.5 flex-auto">
              {openfilter && (
                <View className="absolute bottom-12 left-4 min-h-full rounded-md  bg-white dark:bg-gray-800 lg:top-12">
                  <Text className="font-500 p-2 text-lg font-bold dark:text-white">
                    Category
                  </Text>
                  {['Apple', 'Fitbit', 'Dell', 'Asus'].map((item, i) => (
                    <TouchableOpacity
                      key={i}
                      className="flex-row items-center bg-white dark:bg-gray-800"
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

const TableColumn = ({ header, data, cellColorWhite = false }) => (
  <DataTable className="w-full flex-1 justify-center">
    <DataTable.Header className="  bg-gray-50   dark:bg-gray-700 dark:text-gray-400 ">
      <DataTable.Title className=" px-4 py-3 ">
        <Text className="flex-1 bg-gray-50 text-justify  text-xs font-extrabold uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          {header}
        </Text>
      </DataTable.Title>
    </DataTable.Header>
    {data.map((item, index) => (
      <DataTable.Row key={index} className="bg-white dark:bg-gray-800">
        <DataTable.Cell
          className={`flex-1 items-center  justify-center px-4 py-3 `}
        >
          {item}
        </DataTable.Cell>
      </DataTable.Row>
    ))}
  </DataTable>
)

const TableFooter = () => {
  const colorScheme = useColorScheme()
  return (
    <AppView className=" flex-auto items-start lg:flex-row lg:items-center lg:justify-between">
      <Row className="items-center justify-evenly">
        <Text className=" text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing
        </Text>
        <Text className="font-semibold text-gray-900 dark:text-white">
          {' '}
          1-10{' '}
        </Text>
        <Text className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {' '}
          of{' '}
        </Text>
        <Text className="font-semibold text-gray-900 dark:text-white">
          1000
        </Text>
      </Row>
      <Row className="h-fit items-center ">
        <IconButton
          icon="chevron-left"
          mode="contained"
          iconColor={
            colorScheme === 'dark' ? 'rgb(156,163,175)' : 'rgb(107,114,128)'
          }
          className="m-0 h-full rounded-l-lg rounded-r-none border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800"
        />
        <View className="h-full border  border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
          <Text className="leading-tight text-gray-500 dark:text-gray-400 ">
            1
          </Text>
        </View>
        <View className="h-full border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
          <Text className="leading-tight  text-gray-500 dark:text-gray-400">
            2
          </Text>
        </View>
        <View className="bg-primary-50 border-primary-300 h-full border p-2 dark:border-gray-700 dark:bg-gray-700">
          <Text className="text-primary-600  leading-tight dark:text-white ">
            3
          </Text>
        </View>
        <View className="h-full border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
          <Text className=" leading-tight text-gray-500 dark:text-gray-400">
            ...
          </Text>
        </View>
        <View className="h-full border border-gray-300 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
          <Text className=" leading-tight text-gray-500 dark:text-gray-400">
            1000
          </Text>
        </View>
        <IconButton
          icon="chevron-right"
          mode="contained"
          iconColor={
            colorScheme === 'dark' ? 'rgb(156,163,175)' : 'rgb(107,114,128)'
          }
          className=" m-0  rounded-l-none rounded-r-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800"
        />
      </Row>
    </AppView>
  )
}
const AdvancedTable = () => {
  return (
    <AppView className=" p-3 dark:bg-gray-900 ">
      <DataTable className="w-full justify-center border border-transparent text-gray-500  shadow-md ">
        <TableHeader />
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'space-evenly',
            flexGrow: 1,
          }}
          bounces={false}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {headers.map((header, index) => (
            <TableColumn
              key={index}
              header={header}
              data={items.flatMap((item) =>
                Object.values(item)
                  .filter((_, i) => i === index)
                  .map((e) => (
                    <Text
                      className={`flex-1 grow text-justify text-sm font-medium text-gray-500 dark:${
                        index === 0 ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {e}
                    </Text>
                  )),
              )}
              cellColorWhite={index === 0}
            />
          ))}
          <TableColumn
            header=""
            data={Array(items.length).fill(
              <ActionsMenu data={['Show', 'Edit', 'Delete']} />,
            )}
          />
        </ScrollView>
        <TableFooter />
      </DataTable>
    </AppView>
  )
}

export { AdvancedTable,TableHeader }
