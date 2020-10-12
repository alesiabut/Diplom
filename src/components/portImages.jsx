import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import FsLightbox from "fslightbox-react";
import Carousel, { Modal, ModalGateway } from "react-images";
import {photos} from "./images";
import {render} from "react-dom";



const Desk = ()=> {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="ml-20 mr-20">
        <div style={{width: "100%"}} className="mt-20 mb-20">
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
        </div>
    )

}

render (<Desk />, document.getElementById('root'));
export default Desk;

