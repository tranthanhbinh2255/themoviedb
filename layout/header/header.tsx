import React, { useState } from 'react'
import { Menu, Dropdown, Icon, Container } from 'semantic-ui-react'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('editorials')

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header as="h3" style={{ fontSize: '1.25em' }}>
            The Movie
          </Menu.Item>
          <Menu.Item as="a" style={{ fontSize: '1.25em' }}>Home</Menu.Item>

          <Dropdown item simple text="Category" style={{ fontSize: '1.25em' }}>
            <Dropdown.Menu>
              <Dropdown.Item style={{ fontSize: '1.25em' }}>Top rated movies</Dropdown.Item>
              <Dropdown.Item style={{ fontSize: '1.25em' }}>Popular movies</Dropdown.Item>
              <Dropdown.Item style={{ fontSize: '1.25em' }}>Upcoming</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </div>
  )
}

export default Header
