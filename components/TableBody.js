import React from 'react'


class TableBody extends React.Component {

    handleClick = () => {
        this.props.onRowClick(this.props.row);
    }

    render() {
        let self = this
        let row = this.props.row
        let columns = this.props.columns
        let rowContent = ''
        return (
            <tr key={row.id} ref={self.props.reference}>
                {
                    columns.map(function (column, index) {
                        let colKey = ''+ row.id + '-' + index
                        if (column.display) {
                            rowContent = `${row[column.field]}`
                            return <td className={column.field} key={colKey} onClick={self.handleClick}>
                                        {rowContent}</td>
                        }
                    })
                }
                <style jsx> {`
 
                          td {
                              padding: 20px;
                              border:0;
                          }
                          tr {
                            border:1px solid transparent;
                            border-style:single;
                            }
                          }
                          tr:nth-child(odd) {
                              background:#F3FAFF;
                              border:2px solid transparent;
                          }
                          tr:nth-child(even) {
                              background: #FFFFFF;;
                              border:1px solid transparent;
                          }
                          tr:hover {
                              border:1px solid #1FBAB0;
                              border-style:double;
                              background:#f7f7f7;
                              cursor:pointer;
                          }
                    `
                }
                </style>
            </tr>
        )
    }
}

export default (TableBody);
