import React, { useState } from 'react';
import Swal from 'sweetalert2';

const MediaManagement = () => {
    const [mediaFiles, setMediaFiles] = useState([]);

    const handleUploadMedia = () => {
        Swal.fire({
            title: 'Upload Media',
            input: 'file',
            inputAttributes: {
                accept: 'image/*,video/*',
                'aria-label': 'Upload your media file'
            },
            showCancelButton: true,
            confirmButtonText: 'Upload',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.value) {
                const file = result.value;
                // Simulate media upload
                setMediaFiles([...mediaFiles, URL.createObjectURL(file)]);
                Swal.fire('Uploaded!', 'Your media file has been uploaded.', 'success');
            }
        });
    };

    const handleDeleteMedia = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This will permanently delete the media file.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedMediaFiles = mediaFiles.filter((_, i) => i !== index);
                setMediaFiles(updatedMediaFiles);
                Swal.fire('Deleted!', 'The media file has been deleted.', 'success');
            }
        });
    };

    return (
        <div className="media-management">
            <h2>Media Management</h2>
            <button onClick={handleUploadMedia}>Upload Media</button>

            <div className="media-gallery">
                {mediaFiles.map((file, index) => (
                    <div key={index} className="media-item">
                        <img src={file} alt={`Media ${index + 1}`} />
                        <button onClick={() => handleDeleteMedia(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediaManagement;
