import { ContentLayout } from 'components/ContentLayout'
import { Gif, Text } from './styles'

export const Error404 = () => (
  <ContentLayout>
    <Text>Opps! Page not found</Text>
    <Gif src='giphy.gif' />
  </ContentLayout>
)
