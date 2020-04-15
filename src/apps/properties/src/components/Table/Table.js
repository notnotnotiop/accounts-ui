import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { Card, CardHeader, CardContent } from '@zesty-io/core/Card'

import styles from './Table.less'
export const Table = React.memo(function Table(props) {
  const [headers, setHeaders] = useState([])
  const [rows, setRows] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    transformData()
  }, [])

  const transformData = () => {
    const headers = Object.keys(props.data[0]).map(header =>
      header.replace(/([A-Z])/g, ' $1').replace(/^./, function(str) {
        return str.toUpperCase()
      })
    )
    setHeaders(headers)
  }
  const columns = headers.length + (props.actions ? 1 : 0)

  const getTemplateColumns = () => {
    let value = ''

    for (let i = 0; i < columns; i++) {
      value += '1fr '
    }

    return value
  }

  const templateColumns = getTemplateColumns()

  return (
    <article className={styles.Table}>
      <header
        className={styles.TableHeader}
        style={{ gridTemplateColumns: templateColumns }}>
        {headers.map(header => (
          <div className={styles.HeaderItem}>
            <span>{header}</span>
          </div>
        ))}
      </header>
      <div className={styles.TableContent}>
        {props.data.map((row, rowIndex) => (
          <article
            className={styles.TableRow}
            style={{ gridTemplateColumns: templateColumns }}>
            {Object.keys(props.data[0]).map(header => (
              <p className={styles.Cell}>
                <span>{row[header]}</span>
              </p>
            ))}
            {props.actions && (
              <p className={styles.RowActions}>{props.actions(rowIndex)}</p>
            )}
          </article>
        ))}
      </div>
    </article>
  )
})
