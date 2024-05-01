import './App.css'
import Header from './parts/header/header'
import List from './parts/list/list'
import Search from './parts/search/search'
import myLocalData from './libs/local_data.json';
import { useEffect } from 'react';
import { data } from './types/typescript';
import { useAppDispatch, useAppSelector } from './rtk/tsHook';
import { setListData_both, setListData_temp } from './rtk/general';
import { Outlet } from 'react-router-dom';
import DataCreator from './libs/dataCreator';


function App() {

  const dispatch = useAppDispatch()
  const searchText = useAppSelector(state => state.general.searchText)
  const collection = useAppSelector(state => state.general.collection)
  const temp = useAppSelector(state => state.general.listData_temp)
  const per = useAppSelector(state => state.general.listData_per)
  const searchButtonClicked = useAppSelector(state => state.general.searchButtonClicked)

  useEffect(() => {
    dispatch(setListData_both(myLocalData))
  }, [])

  useEffect(() => {
    FilterBySearchAndCollection()
  }, [searchButtonClicked])

  function FilterBySearchAndCollection() {

    let myArray: data[] = []
    const myData = [...temp];

    if (searchText === '' || !searchText) {
      return per.length > 0 && dispatch(setListData_temp(per))
    }

    switch (collection) {
      case 'all':
        myData.map((x, y) => {
          if (x.name.includes(searchText)) myArray.push(x)
          if (x.lastName.includes(searchText)) myArray.push(x)
          if (x.meli.toString().includes(searchText)) myArray.push(x)
        })
        break;
      case 'name':
        myData.map((x, y) => {
          if (x.name.includes(searchText)) myArray.push(x)
        })
        break;
      case 'last':
        myData.map((x, y) => {
          if (x.lastName.includes(searchText)) myArray.push(x)
        })
        break;
      case 'meli':
        myData.map((x, y) => {
          if (x.meli.toString().includes(searchText)) myArray.push(x)
        })
        break;

      default:
        break;
    }

    dispatch(setListData_temp(myArray))

  }

  return (
    <>
      <div className='grid-container'>
        <Header />
        <Search />
        <List />
        <Outlet />
      </div>
    </>
  )
}

export default App
