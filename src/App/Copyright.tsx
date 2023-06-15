import React, { memo } from 'react'

const Copyright: React.FC = memo(
  () => (
    <footer className="info">
      <p>
        <a href="http://brian-tan.vercel.app">brian</a>
      </p>
      <p>
        <a href="http://todomvc.com">TodoMVC</a>
      </p>
    </footer>
  ),
  () => true
)

export default Copyright
