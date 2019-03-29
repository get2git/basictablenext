import React from 'react'


class TableHeader extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            sort: {
                column: null,
                direction: 'desc',
            }
        }
    }

    handleClick = () => {
        let column = this.props.column.field
        let direction = this.state.sort.direction === 'asc' ? 'desc' : 'asc'
        // Set the new state.
        this.setState({
            sort: {
                column,
                direction
            }
        });

        this.props.onColumnHeaderClick(this.props.column, direction);
    }

    setArrow = (column) => {
        let className = 'sort-direction';

        if (this.state.sort.column === column) {
            className += this.state.sort.direction === 'asc' ? ' asc' : ' desc';
        }

        return className;
    };

    render () {
        let self = this;
        if (self.props.column.display) {
            return (
                <th className="sortable" key={self.props.columnNumber} onClick={self.handleClick}>
                    <span className={self.setArrow(self.props.column.field)}/>
                    {self.props.column.label}
                    <style jsx> {`
                        th{
                              padding: 20px;
                              border:0;
                              text-transform: capitalize;
                              background:#CAE7EB;
                        }
    
                        thead th {
                              text-transform: uppercase;
                              cursor: pointer;
                        }                          
                        .sort-direction {
                          position:relative;
                          padding-left:15px;
                          padding-right:15px;
                        }
                        .sort-direction :before,
                        .sort-direction :after {
                          content: '';
                          position:absolute;
                          display:block;
                          width:0;
                          border: 4px solid transparent;
                          height:0;
                          top:50%;
                          left:0;
                        }
                    
                        .sort-direction :before {
                          border-bottom:5px solid #ccc;
                          margin-top:-10px;
                        }
                    
                        .sort-direction :after {
                          border-top:5px solid #ccc;
                          margin-top:5px;
                        }
                    
                        .sort-direction.asc:before {
                          border-bottom: 5px solid #1118F7;
                        }
                    
                        .sort-direction.desc:after {
                          border-top: 5px solid #1118F7;
                        }
                      }
                          
                    `
                    }
                    </style>
                </th>
            );
        } else {
            return null
        }
    }
}

export default (TableHeader);
