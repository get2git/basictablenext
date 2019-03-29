import React from 'react'
import TableHeader from '../components/TableHeader'
import TableBody from '../components/TableBody'

class BasicTable extends React.Component {

    constructor (props) {
        super(props);
    }

    render() {
        let self = this
        let tableHeaders = (
            <thead>
            <tr key="A">
                {
                    self.props.columns.map(function (column, index) {
                        return (
                            <TableHeader
                                column={column}
                                key={index}
                                columnNumber={index}
                                onColumnHeaderClick={self.props.onColumnHeaderClick}
                            />
                        )})
                }
            </tr>
            </thead>
        );

        let basicTableBody = self.props.data.map(function (row, index) {
            return (<TableBody
                    columns={self.props.columns}
                    data={self.props.data}
                    row={row}
                    key={row.id}
                    onRowClick={self.props.onRowClick}
                />
            )
        });

        return (
                <table className="table table-hover" >
                    {tableHeaders}
                    <tbody>{basicTableBody}</tbody>
                </table>
        )
    }
}

export default (BasicTable);
