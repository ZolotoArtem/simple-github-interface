import React, { useContext } from 'react';
import ReactTable from 'react-table'
import Context from '../../context';

import 'react-table/react-table.css';

const Repositories = ({ repos, setRep }) => {
    const { setCommitsOpen } = useContext(Context);

    const handleOpenCommits = (rep) => {
        setCommitsOpen(true);
        setRep(rep)
    }

    return (
        <div className='repositories'>
            <ReactTable
                data={repos}
                columns={[
                    {
                        Header: 'Name',
                        accessor: 'name',
                        Cell: ({value}) => {
                            return (
                                <a href='#' onClick={handleOpenCommits.bind(null, value)}>{value}</a>
                            )
                        },
                        style: {textAlign: 'center'}
                    },
                    {
                        Header: 'language',
                        accessor: 'language',
                        style: {textAlign: 'center'}
                    },
                    {
                        Header: 'stars',
                        accessor: 'stargazers_count',
                        style: {textAlign: 'center'}
                    },
                    {
                        Header: 'Description',
                        accessor: 'description',
                        style: {whiteSpace: 'normal'}
                    }
                ]}
                defaultPageSize={10}
                className='-striped -highlight'
            />
        </div>
    )
}

export default Repositories;