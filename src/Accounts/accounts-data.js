export const accountsData = [
	{
		id: 1,
		company: 'HP',
		name: 'Alice',
		status: 'active',
        manager: {id: '', name: ''},
        workersId: [2,3],
        toHighlight: true
    },
    {
		id: 2,
		company: 'IBM',
		name: 'Bob',
		status: 'active',
        manager: {id: 1, name: 'Alice'},
        workersId: [5],
        toHighlight: false
    },
    {
		id: 3,
		company: 'Google',
		name: 'Charlie',
		status: 'active',
        manager: {id: 1, name: 'Alice'},
        workersId: [4],
        toHighlight: false
    },
    {
		id: 4,
		company: 'MySpace',
		name: 'Eve',
		status: 'closed',
        manager: {id: 3, name:'Charlie'},
        workersId: [],
        toHighlight: false
    },
    {
		id: 5,
		company: 'United',
		name: 'Dave',
		status: 'active',
        manager: {id: 2, name:'Bob'},
        workersId: [],
        toHighlight: false
	},
];
