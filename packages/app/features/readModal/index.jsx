import { AppButton } from 'app/design/AppButton'
import { AppModal } from 'app/design/AppModal'
import { AppView } from 'app/design/AppView'
import { Row } from 'app/design/layout'
import { H1, P } from 'app/design/typography'
import { View } from 'app/design/view'
import { useState } from 'react'

const ReadModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppView className="relative p-0">
      <View className="dark:focus:ring-primary-800 focus:ring-primary-300 overflow-hidden rounded-lg	focus:outline-none focus:ring-4">
        <AppButton
          className="bg-primary-700 hover:bg-primary-800  dark:bg-primary-600 dark:hover:bg-primary-700   px-5 py-2.5 text-center text-sm font-medium text-white "
          onPress={() => setOpen(true)}
        >
          Show read modal
        </AppButton>
      </View>
      <View
        className={`${
          !open && 'hidden'
        }  absolute h-full w-full items-center justify-center px-2`}
      >
        <AppView className={` absolute   w-[98%] justify-start shadow-md`}>
          <Row className="w-full items-center justify-between">
            <H1 className="my-0 text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
              Apple iMac 27”
            </H1>
            <AppButton
              className="inline-flex rounded-lg bg-transparent p-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              onPress={() => setOpen(false)}
            >
              X
            </AppButton>
          </Row>
          <H1 className="mt-0 self-start text-lg font-bold text-gray-900 dark:text-white md:text-xl">
            $2999
          </H1>
          <View className="mb-0 flex h-full  flex-col">
            <H1 className="my-0 mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Details
            </H1>
            <P className="mb-4 mt-0 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
              Standard glass ,3.8GHz 8-core 10th-generation Intel Core i7
              processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory,
              Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage,
              Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US.
            </P>
            <H1 className="my-0 mb-2 font-semibold leading-none text-gray-900 dark:text-white">
              Category
            </H1>
            <P className="mb-4 mt-0 font-light text-gray-500 dark:text-gray-400 sm:mb-5">
              Electronics/PC
            </P>
            <Row className="justify-between">
              <Row className="space-x-3">
                <View className="focus:ring-primary-300 dark:focus:ring-primary-800 overflow-hidden rounded-lg focus:outline-none focus:ring-4">
                  <AppButton className="bg-primary-700 hover:bg-primary-800  dark:bg-primary-600 dark:hover:bg-primary-700  inline-flex items-center  px-5 py-2.5 text-center text-sm font-bold text-white ">
                    Edit
                  </AppButton>
                </View>
                <View className="overflow-hidden rounded-lg border border-gray-200 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:focus:ring-gray-700">
                  <AppButton className="hover:text-primary-700  bg-white px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-100  dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ">
                    Preview
                  </AppButton>
                </View>
              </Row>
              <View className="inline-flex items-center overflow-hidden rounded-lg focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                <AppButton className="bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600">
                  Delete
                </AppButton>
              </View>
            </Row>
          </View>
        </AppView>
      </View>
    </AppView>
  )
}

export { ReadModal }
