import { H1, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center p-3 ">
      <H1>Welcome to My App.</H1>
      <Row className="m-4 w-full justify-around">
        <TextLink href={'/header'}>Table Header</TextLink>
        <TextLink href={'/notFound'}>404 (Not found)</TextLink>
      </Row>
      <Row className="m-4 w-full justify-around">
        <TextLink href={'/CTA'}>CTA</TextLink>
        <TextLink href={'/AdvancedTable'}>Advanced Table</TextLink>
      </Row>
      <Row className="m-4 w-full justify-center">
        <TextLink href={'/readModal'}>Read Modal</TextLink>
      </Row>
    </View>
  )
}
