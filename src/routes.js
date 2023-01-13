import React from 'react'

const News = React.lazy(() => import('./views/pages/news/News'))
const CreateHabitant = React.lazy(() => import('./views/pages/saveUser/CreateHabitant'))
const UpdateHabitant = React.lazy(() => import('./views/pages/saveUser/UpdateHabitant'))
const MyChildrenList = React.lazy(() => import('./views/pages/myChildren/MyChildrenList'))
const HabitantList = React.lazy(() => import('./views/pages/habitantList/HabitantList'))
const HabitantHasDrivingLisences = React.lazy(() => import('./views/pages/habitantList/HabitantHasDrivingLisences'))
const HabitantisCitizen = React.lazy(() => import('./views/pages/habitantList/HabitantisCitizen'))
const HabitantNameSurname = React.lazy(() => import('./views/pages/habitantList/HabitantNameSurname'))
const HabitantNumberOfChildren = React.lazy(() => import('./views/pages/habitantList/HabitantNumberOfChildren'))
const HabitantSearchID = React.lazy(() => import('./views/pages/habitantList/HabitantSearchID'))
const UpdateHabitantDetail = React.lazy(() => import('./views/pages/saveUser/UpdateHabitantDetail'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/habitant', name: 'Habitant', element: CreateHabitant },
  { path: '/*', name: 'News', element: News },
  { path: '/habitant/children/:id', name: 'Children List', element: MyChildrenList },
  { path: '/habitant/findall', name: 'Habitant List', element: HabitantList },
  { path: '/habitant/isCitizen', name: 'Habitant List', element: HabitantisCitizen },
  { path: '/habitant/hasdrivinglicense', name: 'Habitant List', element: HabitantHasDrivingLisences },
  { path: '/habitant/namesurname', name: 'Habitant List', element: HabitantNameSurname },
  { path: '/habitant/numberofchildren', name: 'Habitant List', element: HabitantNumberOfChildren },
  { path: '/habitant/searchbyid', name: 'Habitant List', element: HabitantSearchID },
  { path: '/habitant/update', name: 'Habitant Update', element: UpdateHabitant},
  {path: '/habitant/updatedetail', name: 'Habitant Update Detail', element: UpdateHabitantDetail}
]
export default routes
