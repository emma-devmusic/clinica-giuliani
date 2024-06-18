import { useCallback, useState } from "react";
import { Gallery } from "react-grid-gallery";
import ImageViewer from 'react-simple-image-viewer';
import './gallery.css'
import { images } from "./dataImage";




export const GalleryImages = () => {


    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);


    const openImageViewer = useCallback((index: any) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    const handleSelect = (index: number) => {
        openImageViewer(index)
    };
    return (
        <div>
            <Gallery images={images} onClick={handleSelect} />
            
            {isViewerOpen && (
                <ImageViewer
                    src={images.map(e => e.src)}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
            )}
        </div>
    )
}