export const accountsData = [
	{
		id: 1,
		company: 'HP',
		name: 'Alice',
		status: 'active',
        manager: {id: '', name: ''},
        workersId: [2,3]
    },
    {
		id: 2,
		company: 'IBM',
		name: 'Bob',
		status: 'active',
        manager: {id: 1, name: 'Alice'},
        workersId: [5,6]
    },
    {
		id: 3,
		company: 'Google',
		name: 'Charlie',
		status: 'active',
        manager: {id: 1, name: 'Alice'},
        workersId: [4]
    },
    {
		id: 4,
		company: 'MySpace',
		name: 'Eve',
		status: 'closed',
        manager: {id: 3, name:'Charlie'},
        workersId: []
    },
    {
		id: 5,
		company: 'United',
		name: 'Dave',
		status: 'active',
        manager: {id: 2, name:'Bob'},
        workersId: []
    },
    {
		id: 6,
		company: 'Amazon',
		name: 'Chen',
		status: 'active',
        manager: {id: 2, name:'Bob'},
        workersId: [7]
    },
    {
		id: 7,
		company: 'Intel',
		name: 'Leo',
		status: 'closed',
        manager: {id: 6, name:'Chen'},
        workersId: []
	},
];
