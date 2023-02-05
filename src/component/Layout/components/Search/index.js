import HeadlessTippy from '@tippyjs/react/headless';
import { useState, useEffect, useRef } from 'react';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./Search.module.scss"
import { Wrapper as PopperWrapper } from "~/component/Popper";
import { AccountItem } from "~/component/AccountItem";
import { useDebounce } from '~/hooks';
import * as searchAPI from '~/apiServices/searchApi';
const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchvalue] = useState('')
    const [searchResult, setsearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const inputRef = useRef()
    const debounce = useDebounce(searchValue, 500)
    useEffect(() => {
        if (!debounce.trim()) {
            setsearchResult([])
            return
        }
        const fetchAPI = async () => {

            setLoading(true)

            const result = await searchAPI.search(debounce, 'less')
            setsearchResult(result)

            setLoading(false)

        }
        fetchAPI()

    }, [debounce]);

    const handleChangeinput = e => {
        setSearchvalue(e.target.value)
    }

    const handleClearClick = () => {
        setSearchvalue('')
        setsearchResult([])
        inputRef.current.focus()
    }

    const handleshowResult = () => {
        setshowResult(false)
    }

    return (
        <HeadlessTippy interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs} >
                    <PopperWrapper>
                        <h4 className={cx('account-title')}>Account</h4>
                        {searchResult.map((result) => {
                            return <AccountItem key={result.id} data={result} />
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleshowResult}
        >
            <div className={cx('search')}>
                <input
                    onFocus={() => { setshowResult(true) }}
                    ref={inputRef}
                    value={searchValue}
                    type={'text'}
                    spellCheck={false}
                    placeholder="Search account and videos"
                    onChange={e => { handleChangeinput(e) }} />
                {!!searchValue && !loading &&

                    <button onClick={handleClearClick} className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                }
                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HeadlessTippy>);
}

export default Search;