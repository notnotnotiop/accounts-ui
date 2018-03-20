import React from 'react'
import styles from './Search.less'
import cx from 'classnames'

export default class Search extends React.Component {
  render() {
    return (
      <div className={cx(styles.search, this.props.className)}>
        <Button className={styles.searchBtn} onClick={this.handleFilter}>
          <i
            className={cx(styles.searchIcon, 'fa fa-search')}
            aria-hidden="true"
          />
        </Button>
        <input
          type="text"
          className={styles.searchField}
          placeholder={this.props.placeholder}
          onFocus={this.props.onFocus}
          onKeyUp={this.props.onKeyUp}
        />
      </div>
    )
  }
  handleFilter = evt => {
    // Prevent button click from triggering
    // a form submission if this exists inside
    // of a form element parent
    evt.preventDefault()
    this.props.onClick(evt)
  }
}
