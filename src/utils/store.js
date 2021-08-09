const cards = [
    {
      id: 'card-1',
      title: 'Научиться готовить',
    },
    {
      id: 'card-2',
      title: 'Сделать сэндвич',
    },
    {
      id: 'card-3',
      title: 'Пойти на пробежку',
    },
  ];
  
  const data = {
    lists: {
      'list-1': {
        id: 'list-1',
        title: 'Сделать',
        cards,
      },
    },
    listIds: ['list-1'],
  };
  
  export default data;