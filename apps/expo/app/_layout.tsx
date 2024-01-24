import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'

export default function Root() {
  return (
    <PaperProvider>
      <Provider>
        <Stack />
      </Provider>
    </PaperProvider>
  )
}
