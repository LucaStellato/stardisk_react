export default function Copyright() {
    return (
        <div className="bg-blue text-yellow fw-bold text-center py-2 mt-auto shadow-top-black">
            <div className="container-fluid">
                <small className="mb-0 opacity-75">
                    © {new Date().getFullYear()} StarDisk. All rights reserved.
                </small>
            </div>
        </div>
    );
}