import classNames from "classnames/bind";
import { useState } from "react";
import images from "~/assets/images";
import Button from "~/component/Button";
import { Wrapper } from "~/component/Popper";
import styles from "./Upload.module.scss"


const cx = classNames.bind(styles)
function Upload() {
    // eslint-disable-next-line no-unused-vars
    const [coverVideoEmpty, setCoverVideoEmpty] = useState(true)
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
                                            <span>0</span>
                                            <span>/150</span>
                                        </div>
                                    </div>
                                    <div className={cx('caption-input')}>
                                        <input type={"text"} />
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
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}

export default Upload;