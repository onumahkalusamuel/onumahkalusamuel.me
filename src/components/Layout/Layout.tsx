import React from "react";
import Head from "./Head";
import {Navbar} from "../Navbar";
import {Spinner} from "@/components/Spinner";

export const Wrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <div
            className={`h-screen`}
            style={{
                minHeight: "500px",
            }}
        >
            <div className="h-screen bg-white text-black dark:bg-black dark:text-white">
                {children}
            </div>
        </div>
    );
};

export const Loading = (
    {
        title,
        children,
        className
    }: { title?: string, children: React.ReactNode, className?: string }) => {
    return (
        <Layout title={title || "Loading"}>
            <Main>
                <div className="text-center">
                    <Spinner className={className}/>
                </div>
                {children}
            </Main>
        </Layout>
    );
};

export const Main = ({
                         children,
                         className = "",
                     }: {
    children: React.ReactNode,
    className?: string
}) => (
    <div className={`py-20 px-8 max-w-3xl mx-auto ${className}`}>{children}</div>
);

const Layout = ({
                                      children,
                                      title,
                                      image,
                                      description,
                                  }: {
    children?: React.ReactNode,
    title: string,
    image?: string,
    description?: string
}) => {
    return (
        <>
            <Head title={title} description={description} image={image}/>
            <Wrapper>
                <Navbar/>
                {children}
            </Wrapper>
        </>
    );
};

Layout.Main = Main;
Layout.Loading = Loading;

export default Layout;
