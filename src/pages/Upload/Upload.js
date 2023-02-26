import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useRef } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";

import images from "~/assets/images";
import Button from "~/component/Button";
import { CheckIcon, WarningIcon } from "~/component/Icon";
import { Wrapper } from "~/component/Popper";
import WarningDiv from "../Components/WarningDiv";
import styles from "./Upload.module.scss"


const checkboxes = [
    {
        name: 'Comment',
        check: true
    },
    {
        name: 'Duet',
        check: true
    },
    {
        name: 'Stitch',
        check: true
    },
]
const cx = classNames.bind(styles)
const statusSelector = ['Public', 'Friends', 'Private']
function Upload() {
    // eslint-disable-next-line no-unused-vars
    const [coverVideoEmpty, setCoverVideoEmpty] = useState(true)
    const [chosenStatus, setChosenStatus] = useState('Public')
    const [checkboxesstate, setCheckboxesstate] = useState(checkboxes)
    const [copyrightCheck, setCopyrightCheck] = useState(false)
    const [captionText, setcaptionText] = useState("")
    const [warningCaption, setWarningCaption] = useState(false)
    const inputcaptionRef = useRef()
    const inputchecboxRef = useRef()


    const handleCheckCaptionInput = (e) => {
        if (e.target.value.length === 151) {
            setWarningCaption(true)
            const warning = setTimeout(() => {
                setWarningCaption(false)
            }, 2000);
            return () => {
                clearTimeout(warning)
            }
        }
        //setWarningCaption(false)
        setcaptionText(e.target.value)
    }

    const handleClickCheck = (index, checked) => {
        let temp = checkboxesstate.slice()
        if (checked) {
            temp[index].check = true
        }
        else {
            temp[index].check = false
        }
        setCheckboxesstate(temp)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('upload-wrapper')}>
                <Wrapper className={cx('upload-wrapper')}>
                    <div className={cx('content-wrapper')}>
                        <div className={cx('header')}>
                            <h2>Upload video</h2>
                            <span>Post a video to your account</span>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('upload-content')}>
                                <div>
                                    <div className={cx('upload-video-wrapper')}>
                                        <div className={cx('upload-icon')}><img src={images.cloudUploadIcon} alt="upload" /></div>
                                        <span className={cx('title-upload-1')}>Select video to upload</span>
                                        <span className={cx('title-upload-2')}>or drag and drop a file</span>
                                        <div className={cx('bound-upload')}>
                                            <span>MP4 or WebM</span>
                                            <span>720x1280 resolution or higher</span>
                                            <span>Up to 30 minutes</span>
                                            <span>Less than 2 GB</span>
                                        </div>
                                        <Button primary className={cx('selectfile-btn')}>Select file</Button>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('des-content')}>
                                <div className={cx('edit-video')}>
                                    <div className={cx('icon-divide-black')}><img src={images.divideBlackIcon} alt="edit" /></div>
                                    <div className={cx('des-edit')}>
                                        <span className={cx('des-edit-1')}>Divide videos and edit</span>
                                        <span className={cx('des-edit-2')}>You can quickly divide videos into multiple parts, remove redundant parts and turn landscape videos into portrait videos</span>
                                    </div>
                                    <div className={cx('edit-btn')}><Button primary >Edit</Button></div>
                                </div>
                                <div className={cx('caption-content')}>
                                    <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                                        <span className={cx('header')}>Caption</span>
                                        <div className={cx('count-caption')}>
                                            <span>{captionText.length}</span>
                                            <span>/150</span>
                                        </div>
                                    </div>
                                    <div className={cx('caption-input')}>
                                        <input style={{ whiteSpace: "normal" }} type={"text"} value={captionText} onChange={(e) => { handleCheckCaptionInput(e) }} ref={inputcaptionRef} />
                                        <div className={cx('caption-icon')}><img src={images.atSignIcon} alt="error" /></div>
                                        <div className={cx('caption-icon')}><img src={images.hashtagIcon} alt="error" /></div>

                                    </div>
                                </div>

                                <div className={cx('cover-content')}>
                                    <span className={cx('header')}>Cover</span>

                                    <div className={cx('cover-input')}>
                                        <div className={cx('cover-video', coverVideoEmpty && 'cover-video-empty')}></div>
                                    </div>
                                </div>
                                <div className={cx('upload-option')}>
                                    <div className={cx('video-status')}>
                                        <span className={cx('header')} style={{ marginBottom: "4px" }}>Who can watch this video</span>
                                        <Tippy
                                            trigger="click"
                                            placement="bottom-start"
                                            interactive
                                            render={(attrs, a, instance) => {
                                                return <Wrapper className={cx('option-select')}>
                                                    {statusSelector.map((status, index) => {
                                                        return <span onClick={() => {
                                                            setChosenStatus(status)
                                                            instance.hide()
                                                        }} className={cx(status === chosenStatus && 'focus-status-option')} key={index}>{status}</span>
                                                    })}
                                                    <div></div>
                                                </Wrapper>
                                            }}>
                                            <div className={cx('status-select')}>
                                                <span>{chosenStatus}</span>
                                                <FontAwesomeIcon icon={faCaretDown} />
                                            </div>
                                        </Tippy>
                                    </div>
                                    <div className={cx('allowuser-wrapper')}>
                                        <span className={cx('header')} style={{ marginBottom: "4px" }}>Allow users to:</span>

                                        <div className={cx('checkbox-wrapper')}>
                                            {checkboxesstate.map((checkbox, index) => {
                                                return <div key={checkbox.name} className={cx('wrapper-checkbox')} >
                                                    <div className={cx('wrapper-input')}>
                                                        <input ref={inputchecboxRef} onChange={(e) => {

                                                            handleClickCheck(index, e.target.checked)

                                                        }} type={"checkbox"} checked={checkbox.check} />
                                                        <div className={cx('border-input', checkbox.check && 'border-input-check')}>
                                                            <CheckIcon />
                                                        </div>
                                                    </div>
                                                    <span>{checkbox.name}</span>
                                                </div>
                                            })}


                                        </div>
                                    </div>
                                </div>
                                <div className={cx('copyright-check')}>
                                    <span className={cx('header', 'title-copyright-check')}>Run a copyright check</span>
                                    <label className={cx('switch-input')}>
                                        <input type={"checkbox"} className={cx('check-copyright')} onChange={(e) => {
                                            setCopyrightCheck(e.target.checked)
                                        }} checked={copyrightCheck} />
                                        <span className={cx('slider')}></span>
                                    </label>
                                </div>
                                <div className={cx('warning-copyright')}>
                                    {!copyrightCheck ? (<span className={cx('warning-type1')}><span>We'll check your video for potential copyright infringements on used sounds. If infringements are found, you can edit the video before posting.</span><span className={cx('warning-type1', 'bold')}> Learn more</span></span >)
                                        : (<span className={cx('warning-type2')}>
                                            <WarningIcon />
                                            <span>Copyright check will not begin until your video is uploaded.</span>
                                        </span>)}
                                </div>
                                <div className={cx('submit-btn')}>
                                    <Button text>Discard</Button>
                                    <Button primary disabled>Post</Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
                {warningCaption && createPortal(
                    <WarningDiv>maximum 150 characters</WarningDiv>,
                    document.body)}
            </div>
        </div>
    );
}

export default Upload;