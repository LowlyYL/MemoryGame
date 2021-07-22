import './Preloader.css';

const Preloader = () => {

    return (
        <div className="preloader-container">
            <div className="preloader-frame frame-first"></div>
            <div className="preloader-circle"></div>
            <div className="preloader-frame frame-second"></div>
        </div>
    )
}

export default Preloader;