import React from "react";

export const Title = ({children, className}: { children: React.ReactNode, className?: string }) => {
    const fontSize = className?.includes("text-") ? "" : "text-4xl lg:text-5xl";
    return (
        <h1 className={`leading-snug font-medium mb-10 ${fontSize} ${className}`}>
            {children}
        </h1>
    );
};
