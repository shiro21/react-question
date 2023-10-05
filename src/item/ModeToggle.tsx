import React from "react";

interface ModeToggleProps {
    toggleTheme: () => void
}

const ModeToggle: React.FC<ModeToggleProps> = ({ toggleTheme }) => {
    return (
        <button onClick={toggleTheme} style={{width: "80px", height: "30px", background: "#FFF", border: "1px solid #DDD", borderRadius: "16px"}}>
            다크모드
        </button>
    );
}

export default ModeToggle;