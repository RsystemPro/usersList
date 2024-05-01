import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './rtk/store.ts'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PopUp from './components/popUp/index.tsx'
import AddUser from './components/addUser/index.tsx'
import EditUser from './components/editUser/index.tsx'
import RemoveUser from './components/removeUser/index.tsx'
import ReadUser from './components/readUser/index.tsx'
import MyChart from './components/myChart/index.tsx'
import MyMap from './components/myMap/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addUser",
        element: <PopUp modalName='addUser' title='افزودن کاربر جدید'><AddUser /></PopUp>,
      },
      {
        path: "/addUser/location",
        element: <Location_Click/>,
      },
      {
        path: "/view/:id",
        element: <PopUp modalName='view' title='مشاهده اطلاعات'><ReadUser /></PopUp>,
      },
      {
        path: "/view/:id/location",
        element: <Location_View/>,
      },
      {
        path: "/edit/:id",
        element: <PopUp modalName='edit' title='ویرایش اطلاعات'><EditUser /></PopUp>,
      },
      {
        path: "/edit/:id/location",
        element: <Location_Click/>,
      },
      {
        path: "/remove/:id",
        element: <PopUp modalName='remove' title='حذف'><RemoveUser /></PopUp>,
      },
      {
        path: "/chart/:id",
        element: <PopUp modalName='chart' title='نمودار'><MyChart /></PopUp>,
      },
      {
        path: "/location/:id",
        element: <PopUp modalName='location' title='نقشه'><MyMap /></PopUp>,
      },
    ],
  },
]
);

function Location_View() {
  return (
    <>
      <PopUp backLocation={true} modalName='location_view' title='نقشه'><MyMap /></PopUp>
    </>
  )
}
function Location_Click() {
  return (
    <>
      <PopUp backLocation={true} modalName='location_view' title='نقشه'><MyMap getDataMode={true} /></PopUp>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
