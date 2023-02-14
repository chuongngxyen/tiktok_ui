import classNames from "classnames/bind";
import images from "~/assets/images";
import Button from "~/component/Button";
import { Wrapper } from "~/component/Popper";
import styles from "./Upload.module.scss"


const cx = classNames.bind(styles)
function Upload() {
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
                            <div className={cx('des-content')}></div>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}

export default Upload;