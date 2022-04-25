import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'

const BigBanner: React.FC<any> = () => (
  <>
    <Segment inverted textAlign="center" style={{ minHeight: 400 }} vertical>
      <Container text>
        <Header
          as="h1"
          content="The Movie"
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '2em',
          }}
        />
      </Container>
    </Segment>
  </>
)

export default BigBanner
