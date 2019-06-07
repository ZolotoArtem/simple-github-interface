import React, { useEffect, useState, useContext } from 'react';
import ReactTable from 'react-table'
import API from '../../api';
import Context from '../../context';

const Commits = ({ rep, username }) => {
    const [ commits, setCommits ] = useState([]);
    const { setCommitsOpen } = useContext(Context);

    useEffect(() => {
        API.fetchCommits(username, rep)
            .then(data => setCommits(data))
    }, [])
    
    return (
        <div className='commits'>
            <button onClick={() => setCommitsOpen(false)}>Назад</button>
            <ReactTable
                data={(commits[0]||{}).commit && commits}
                columns={[
                    {
                        Header: 'Репозиторий: ' + rep,
                        columns: [
                            {
                                Header: 'Автор',
                                accessor: 'commit.author.name',
                                style: {textAlign: 'center'}
                            },
                            {
                                Header: 'Хэш коммита',
                                accessor: 'sha'
                            },
                            {
                                Header: 'Дата',
                                accessor: 'commit.author.date',
                                Cell: ({value}) => {
                                    return <span>{value.split('T')[0]}</span>
                                },
                                style: {textAlign: 'center'}
                            },
                        ]
                    },
                ]}
                defaultPageSize={10}
                className='-striped -highlight'
            />
        </div>
    )
}

export default Commits;