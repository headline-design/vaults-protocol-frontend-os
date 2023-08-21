import React, { FC, ReactNode } from 'react';

interface Props {
    text?: ReactNode; // Changed the type here
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    loading?: boolean;
    className?: string;
    id?: string;
    onClick?: (e?: any) => void;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    leftText?: string;
    rightText?: string;
}

export const Button: FC<Props> = ({
    text,
    type,
    disabled,
    className,
    onClick,
    primary,
    secondary,
    tertiary,
    ...rest
}) => {
    return (
        <button
            type={type || undefined}
            className={`button ${disabled ? 'disable' : ''}
                ${className}
                ${secondary && 'secondary'}
                ${tertiary && 'tertiary'}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            <div className="btn-inside">
                <p>{text}</p>
            </div>
        </button>
    );
};

export const CapsuleBtn = ({ leftText, rightText, onClick }: Props) => (
    <div className="capsule-btn" onClick={onClick}>
        <div className="left-capsule">{leftText}</div>
        <div className="right-capsule">{rightText}</div>
    </div>
);
