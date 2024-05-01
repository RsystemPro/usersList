import { useState } from 'react';
import DropDown from '../../components/dropdown';
import SearchBox from '../../components/searchBox/searchBox';
import SimpleButton from '../../components/simpleButton';
import './style.css';
import { collections } from '../../types/typescript';
import { useAppDispatch } from '../../rtk/tsHook';
import { SearchButtonClicked, setCollection, setSearchText } from '../../rtk/general';

function Search() {
    const dispatch = useAppDispatch()
    const [search, setSearch] = useState<string>('')
    const [collection, setCollectionn] = useState<collections>('all')

    function ButtonClick() {
        dispatch(setSearchText(search))
        dispatch(setCollection(collection))
        dispatch(SearchButtonClicked())
    }

    return (
        <div className="search">
            <div className='search_sub search_sub_s'>
                <h5>جستجو در دسته بندی ها</h5>
                <SearchBox TextCallback={setSearch}>جستجو</SearchBox>
            </div>
            <div className='search_sub search_sub_d'>
                <h5>دسته بندی</h5>
                <DropDown callback={setCollectionn}>
                    <option value="all">همه</option>
                    <option value="name">نام</option>
                    <option value="last">نام خانوادگی</option>
                    <option value="meli">کد ملی</option>
                </DropDown>
            </div>
            <div className='search_sub search_sub_b'>
                <SimpleButton callback={ButtonClick} >جستجو</SimpleButton>
            </div>
        </div>
    );
}

export default Search;