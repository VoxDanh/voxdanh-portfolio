import ExpProject from './expComponent/ExpProject/ExpProject.jsx';
import ExpEducation from './expComponent/ExpEducation/ExpEducation.jsx';
import ExpCareer from './expComponent/ExpCareer/ExpCareer.jsx';
import './Experience.css';
import React, { forwardRef, useState } from 'react';
const ExperienceSection = forwardRef((props, ref) => {
    // 1. Khai báo State để giữ ID của phần đang được chọn
    // Mặc định ban đầu là 'project'
    const [activeTab, setActiveTab] = useState('project');

    // 2. Hàm xử lý khi người dùng click vào một mục
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    // 3. Hàm render nội dung tương ứng (Giúp code trong return sạch hơn)
    const renderContent = () => {
        switch (activeTab) {
            case 'project':
                return <ExpProject />;
            case 'education':
                return <ExpEducation />;
            case 'career':
                return <ExpCareer />;
            default:
                return null;
        }
    };

    return (
        <article className="experience-article" ref={ref}>
            {/* Phần Menu điều hướng */}
            <nav className="tab-navigation">
                <div
                    className={`tab-item ${activeTab === 'project' ? 'active' : ''}`}
                    onClick={() => handleTabClick('project')}
                >
                    Projects
                </div>
                <div
                    className={`tab-item ${activeTab === 'education' ? 'active' : ''}`}
                    onClick={() => handleTabClick('education')}
                >
                    Education
                </div>
                <div
                    className={`tab-item ${activeTab === 'career' ? 'active' : ''}`}
                    onClick={() => handleTabClick('career')}
                >
                    Career
                </div>
            </nav>

            {/* Phần hiển thị nội dung thay đổi */}
            <div className="tab-content">
                {renderContent()}
            </div>
        </article>
    );
});

export default ExperienceSection;