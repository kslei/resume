export const menu = [
  {
    id: 1, value: 'About me', path: '/about', icon: 'about_me.png', submenu: [
      { id: 1, value: 'personal details', path: '/about#ancor1' },
      { id: 2, value: 'contact info', path: '/about#ancor2' },
      { id: 3, value: 'what I want to be', path: '/about#ancor3' },
      { id: 4, value: 'work experience', path: '/about#ancor4' },
    ]
  },
  {
    id: 2, value: 'Education', path: '/education', icon: 'graduation-cap.png', submenu: [
      { id: 1, value: 'university education', path: '/education#ancor1' },
      { id: 2, value: 'additional education', path: '/education#ancor2' },
    ]
  },
  {
    id: 3, value: 'Skills', path: '/skills', icon: 'skills.png', submenu: [
      { id: 1, value: 'knowledge', path: '/skills#ancor1' },
      { id: 2, value: 'work samples', path: '/skills#ancor2' },
    ]
  },
  { id: 4, value: 'Languages', path: '/languages', icon: 'languages.png', submenu: [] },
  { id: 5, value: 'Life values', path: '/lv', icon: 'value.png', submenu: [] },
]

export const rightColumn = [
  { id: 0, src: '/newshop.png', alt: 'newshops', path: 'https://newshops.ksl-ei.pp.ua/', technology: 'react, react-router, i18next, mobX, axios, nodeJS - express, sequelize, mySQL, JWT', git: 'https://github.com/kslei/NewShop.git' },
  { id: 1, src: '/vorokhta.png', alt: 'Vorokhta', path: 'https://kslei.github.io/Vorokhta/', technology: 'html, scss, JS, canvas, gulp', git: 'https://github.com/kslei/Vorokhta.git' },
  { id: 2, src: '/amazon.png', alt: 'amazon', path: 'https://kslei.github.io/amazon/', technology: 'react, react-router, typescript, scss, vite', git: 'https://github.com/kslei/amazon.git' },
  { id: 3, src: '/Task2.png', alt: 'Task2', path: 'https://kslei.github.io/Task2/', technology: 'html, scss, js, gulp', git: 'https://github.com/kslei/Task2.git' },
  { id: 4, src: '/Task2-2.png', alt: 'Task2-2', path: 'https://kslei.github.io', technology: 'react, scss', git: 'https://github.com/kslei/test2new.git'},
  { id: 5, src: '/inboost.png', alt: 'inboost', path: 'https://kslei.github.io/inboost/', technology: 'react, react-flow', git: 'https://github.com/kslei/inboost.git'},
  { id: 6, src: '/newshopmobile.jpg', alt: 'newshop mobile', path: '/loading', technology: 'react-native, react-router, i18next, redux, expo, axios', git: 'https://github.com/kslei/newshopmobile.git' },
  { id: 7, src: '/todolist.png', alt: 'todolist', path: 'https://kslei.github.io/todolist/', technology: 'react, redux, scss', git: 'https://github.com/kslei/todolist.git' },
]