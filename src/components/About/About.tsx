import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Made with{' '}
          <FontAwesomeIcon
            className="love"
            icon={faHeart}
            style={{ fontSize: '1.2em' }}
          />{' '}
          in <strong>Brazil</strong>.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
