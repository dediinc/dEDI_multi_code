import { h } from 'preact'

import PropTypes from 'prop-types'

import styles from './list-item.css'

const ListItem = (props) => {
  return (
    <div class={styles['container']}>
      <svg viewBox="0 0 1024 1024" class={styles['icon']}>
        <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
      </svg>
      <span class={styles['text']}>{props.text}</span>
    </div>
  )
}

ListItem.defaultProps = {
  text: 'We’ll start with simple tasks and quickly get to the advanced concepts',
}

ListItem.propTypes = {
  text: PropTypes.string,
}

export default ListItem
