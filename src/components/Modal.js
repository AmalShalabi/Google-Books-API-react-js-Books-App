import React from "react";

const Modal = ({show,item,onClose}) => {
    if(!show)
    {
        return null;
    }
            let thumbnail = item.volumeInfo.imageLinks.smallThumbnail;

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i class="fa-solid fa-xmark"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} />
            <div className="info">
              <h1>{item.volumeInfo.title} </h1>
              <h3>{item.volumeInfo.authors}</h3>
              <h4>
                {item.volumeInfo.publisher}
                <span>{item.volumeInfo.publishedDate}</span>
              </h4>
              <a href={item.volumeInfo.previewLink}>
                <button>More Info</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.subtitle}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
