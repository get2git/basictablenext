import React from 'react';
import BasicTable from "../components/BasicTable"
import {getTodos} from "../actions";


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.columnHeaders = [
            { field: 'userId', display: true, label: 'User Id', sort: false},
            { field: 'id', display: false, label: 'ID', sort: false },
            { field: 'title', display: true, label: 'Todo', sort: true },
            { field: 'completed', display: true, label: 'Is Completed?', sort: true }
        ];

        this.state = {
            todos: []
        }

        this.onSort = this.onSort.bind(this);

    }

    static async getInitialProps({req}) {
        let todos = [];

        try {
            todos = await getTodos(req);
        } catch(err) {
            console.error(err);
        }

        return {todos};
    }

    handleOnSelect = (row) => {
        console.log('Selected Row -->', row)
        // If you want to redirect to different url upon clicking the row...
        // let detailUrl =`/${row.slug}`
        // Router.push(detailUrl);
    };

    onSort(column, direction) {
        console.log('Selected Column -->', column)
        console.log('Sort Direction -->', direction)

        const sortedTodos = this.state.todos.sort((a, b) => {
            const collator = new Intl.Collator('EN-US', {numeric: false, sensitivity: 'base'});
            return collator.compare(a[column.field], b[column.field]);
        });

        // Reverse the order if direction is descending.
        if (direction === 'desc') {
            sortedTodos.reverse();
        }
        // Set the new state.
        this.setState({
            todos: sortedTodos,
        });
    }

    componentDidMount() {
        this.setState({
            todos: this.props.todos,
        })
    }

    render() {
        const {todos} = this.state;
        let self = this;
        return (
            <div>
                <BasicTable
                    columns={self.columnHeaders}
                    data={todos}
                    onColumnHeaderClick={self.onSort}
                    onRowClick={self.handleOnSelect}
                />
            </div>
        )
    }

}

export default Index;
