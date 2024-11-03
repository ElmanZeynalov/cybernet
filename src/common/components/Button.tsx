import React from 'react';

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

function Button({ type = 'button', className, children, onClick }: ButtonProps) {
    return (
        <button
            type={type}
            className={`bg-green-500 text-white w-full mt-2 rounded ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
