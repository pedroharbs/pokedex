import React, { useState } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const Sidenav = (props: any) => {
  const [selected, setSelected] = useState('/')

  return (
    <SideNav
      onSelect={(selected: any) => {
        setSelected(selected)
        props.history.push('/')
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="charts">
          <NavIcon>
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={{ fontSize: '1.75em' }}
            />
          </NavIcon>
          <NavText>About</NavText>
          <NavItem eventKey="charts/linechart">
            <NavText>Project Intuit</NavText>
          </NavItem>
          <NavItem eventKey="charts/barchart">
            <NavText>Contact</NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  )
}

export default Sidenav
