const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net'
  }
  ];

robots.push({id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org'});

console.log(robots[3]);

robots.splice(3, 0, {gender: "female"});



const myRecipes = [ 
{
  name: 'BBQ Chicken',
  type: ['lunch', 'dinner'],
  ingredients: 
    {
      amount: 1
      type: 'per person'
      ingredient: 'chicken breast'
    }, 
    {
      amount: .5
      type: 'cup'
      ingredient: 'BBq sauce'
    }
}
{
  name: 'Oatmeal',
  type: ['breakfast', 'dinner'],
  ingredients: 
    {
      amount: .5
      type: 'cup per person'
      ingredient: 'oatmeal'
    } 
}
{
  name: 'Tacos',
  type: ['dinner'],
  ingredients: { 
    {
      amount: 1.5
      type: 'lb'
      ingredient: 'hamburger'
    }, 
    {
      amount: 1,
      type: 'cup',
      ingredient: 'tomatoes'
    },
    {
      amount: 3,
      type: 'cup',
      ingredient: 'chopped lettuce'
    }, 
    {
      amount: undefined,
      type: undefined,
      ingredient: 'sour cream'
    }, 
    {
      amount: undefined,
      type: undefined,
      ingredient: 'shredded cheese'
    }, 
    {
      amount: 1,
      type: 'per person',
      ingredient: 'tortilla'
    }
}
];