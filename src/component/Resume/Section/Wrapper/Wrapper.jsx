import './Wrapper.css' // <-- Thêm dòng này

function Wrapper({ title, children, className, avtImg }) {
    return (
        // Thêm || '' để tránh lỗi undefined
        <div className={`section-wrapper ${className || ''}`}>
            {/* 1. Phần Avatar chồng lên (nếu có) */}
            {avtImg && (
                <div>
                    <div className="avt-img-container">
                        <img src={avtImg} className="section-avt" alt="Avatar" />
                    </div>
                    <div>
                        {/* Khoảng trống để tránh nội dung bị che khuất bởi avatar */}
                        <div style={{ height: '100px' }}></div>

                    </div>
                </div>
            )}

            {/* 2. Tiêu đề của section */}
            {title && <h2 className="section-title">{title}</h2>}

            {/* 3. Nội dung riêng biệt */}
            <div className="section-content">
                {children}
            </div>
        </div>
    );
}
export default Wrapper;