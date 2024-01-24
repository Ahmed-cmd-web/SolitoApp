import { AppButton } from 'app/design/AppButton'
import { AppView } from 'app/design/AppView'
import { Row } from 'app/design/layout'
import { H1, P } from 'app/design/typography'
import { View } from 'app/design/view'
import { useColorScheme } from 'react-native'
import { SolitoImage } from 'solito/image'

const CTA = () => {
  const color = useColorScheme()
  return (
    <AppView className="lg:flex-row lg:space-x-3">
      <View className="w-full flex-1 ">
        {color == 'light' && (
          <SolitoImage
            src={require('../../assets/CTA-White.svg')}
            style={{ width: '100%', height: '100%' }}
            alt="Solito"
          />
        )}
        {color == 'dark' && (
          <SolitoImage
            src={require('../../assets/CTA-Dark.svg')}
            style={{ width: '100%', height: '100%' }}
            alt="Solito"
          />
        )}
      </View>
      <View className="flex-1">
        <H1 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Let's create more tools and ideas that brings us together.
        </H1>
        <P className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
          Flowbite helps you connect with friends and communities of people who
          share your interests. Connecting with your friends and family as well
          as discovering new ones is easy with features like Groups.
        </P>
        <Row>
          <AppButton
            onPress={() => {}}
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900  relative inline-flex flex-row items-center rounded rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
          >
            Get Started
          </AppButton>
        </Row>
      </View>
    </AppView>
  )
}

export { CTA }
