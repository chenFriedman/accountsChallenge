import React, { useState } from 'react';
import './accounts-component.scss';
import {accountsData} from './accounts-data';

const Accounts = () => {

    let initialConnectedAccounts = {};
    
    // eslint-disable-next-line array-callback-return
    accountsData.map(account => {
        let connectedAccount = {};
        connectedAccount['isHiglight'] = false;
        connectedAccount['isCompanyHighlight'] = false;
        connectedAccount['connections'] = [account.id, ...account.workersId];
        let managerId = account.manager.id;
        while (managerId !== '') {
            managerId = accountsData[managerId-1].manager.id;
        }
        account.workersId.forEach(workerId => {
            connectedAccount['connections'].push(...accountsData[workerId-1].workersId);
        })
        initialConnectedAccounts[account.id] = connectedAccount;
    });
    
    accountsData.map(account => {
        if(account.workersId !== '') {
            account.workersId.map(worker => 
                initialConnectedAccounts[account.id]['connections'].push(...initialConnectedAccounts[worker]['connections']));
        }
    });

    const [connectedAccounts, setConnectedAccounts] = useState(initialConnectedAccounts);    
    
    const isActive = (account) => {
        return account.status === 'active' ? true : false;
    }

    const isAccountManagerWithNoAccounts = (account) => {
        return account.workersId.length === 0 ? true : false;
    }

    const managerClassName = (account) => {
        let className = '';
        className = isAccountManagerWithNoAccounts(account) ? 'red' : '';
        className = isActive(account) ? className.concat(' ', 'clickable') : className;
        return className;
    }

    const handleClick = (id) => {
        let tempConnectedAccounts = Object.assign({}, initialConnectedAccounts);
            tempConnectedAccounts[id].connections.map(connection => 
                tempConnectedAccounts[connection].isHiglight = true);
            tempConnectedAccounts[id].isCompanyHighlight = true;
            setConnectedAccounts(tempConnectedAccounts);
    }
    
    const renderAccountManagersDataSet= () => {
        const managersDataSet = accountsData.map(account => (
            <tr className={isActive(account) ? 'clickable': ''} 
                onClick={() => isActive(account) && handleClick(account.id)} 
                key={account.id} >
                <td className={connectedAccounts[account.id].isHiglight ? 'highlight' : ''}>
                    {account.id}
                    <div className='square'/>
                </td>
                <td>{account.name}</td>
                <td>{account.manager.name}</td>
            </tr>
        ));
          
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Manager</th>
                    </tr>
                </thead>
                <tbody>
                {managersDataSet}
                </tbody>
            </table>
        )
    }

    const renderAccountsDataSet= () => {
        const accountsDataSet = accountsData.map(account => (
            <tr className={managerClassName(account)}
                key={account.id}
                onClick={() => isActive(account) && handleClick(account.id, true)}>
                <td className={connectedAccounts[account.id].isCompanyHighlight ?'highlight' : ''}>
                    {account.id}
                    <div className='square square-position'/></td>
                <td>{account.company}</td>
                <td>{account.name}</td>
                <td>{account.status}</td>
            </tr>
        ));

        return (
            <table className='accounts-table'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Account Manager</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {accountsDataSet}
                </tbody>
            </table>
        )
    }

	return (
		<div className='account'>
            <h3>Account Managers Data Set</h3>
            {renderAccountManagersDataSet()}
            <h3 className='title'>Accounts Data Set</h3>
            {renderAccountsDataSet()}
        </div>
	)
};

export default Accounts;

