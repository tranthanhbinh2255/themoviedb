import React, { useState } from 'react'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('editorials')

  return (
    <div>
      <Menu attached="top">
        <Menu.Item header>Home</Menu.Item>
        <Menu.Item
          name="editorials"
          active={activeMenu === 'editorials'}
          onClick={() => setActiveMenu('editorials')}
        >
          Editorials
        </Menu.Item>

        <Menu.Item
          name="reviews"
          active={activeMenu === 'reviews'}
          onClick={() => setActiveMenu('reviews')}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name="upcomingEvents"
          active={activeMenu === 'upcomingEvents'}
          onClick={() => setActiveMenu('upcomingEvents')}
        >
          Upcoming Events
        </Menu.Item>

        <Dropdown
          item
          text="Categories"
          active={activeMenu === 'categories'}
          onClick={() => setActiveMenu('categories')}
        >
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setActiveMenu('categories')}>
              Electronics
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setActiveMenu('categories')}>
              Automotive
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setActiveMenu('categories')}>
              Home
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    </div>
  )
}

export default Header
