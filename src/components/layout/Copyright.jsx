export default function Copyright() {
    return (
        <div className="bg-secondary text-white fw-bold text-center py-2 mt-auto">
            <div className="container-fluid">
                <small className="mb-0">
                    © {new Date().getFullYear()} StarDisk. All rights reserved.
                </small>
            </div>
        </div>
    );
}