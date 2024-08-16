
import React from 'react';
import Swal from 'sweetalert2';

const ContentManagement = () => {
    const handleDeleteContent = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                // Call API to delete content
                Swal.fire(
                    'Deleted!',
                    'Your content has been deleted.',
                    'success'
                );
            }
        });
    };

    return (
        <div className="content-management">
            <h2>Manage Content</h2>
            <button onClick={handleDeleteContent}>Delete Content</button>
        </div>
    );
};

export default ContentManagement;
