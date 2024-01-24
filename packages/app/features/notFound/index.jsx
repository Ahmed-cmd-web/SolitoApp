import { AppButton } from 'app/design/AppButton'
import { AppView } from 'app/design/AppView'
import { H1, P } from 'app/design/typography'
import { useRouter } from 'solito/router'

const NotFound = () => {
  const { push } = useRouter()
  return (
    <AppView className=" space-y-3  ">
      <H1 className="text-primary-600 dark:text-primary-500 text-7xl font-extrabold tracking-tight lg:text-9xl">
        404
      </H1>
      <P className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
        Something's missing.
      </P>
      <P className="mb-4 text-center text-lg font-light text-gray-500 dark:text-gray-400">
        Sorry, we can't find that page. You'll find lots to explore on the home
        page.
      </P>
      <AppButton
        onPress={() => push('/')}
        className="bg-primary-600  hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 my-4 inline-flex rounded  px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 "
      >
        Back to Homepage
      </AppButton>
    </AppView>
  )
}

export { NotFound }
