import React from 'react'
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react'

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
        <Button primary size="huge">
          Get Started
          <Icon name="right arrow" />
        </Button>
      </Container>
    </Segment>
  </>
)

export default BigBanner
