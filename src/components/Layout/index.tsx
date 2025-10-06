import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Layout = (props: { children: React.ReactNode }) => {
    const { children } = props;

    return (
        <div className="min-h-screen bg-background">
            <Sidebar />

            <div className={"ml-64"}>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <div className=" flex-1 p-6">{children}</div>
                </div>
            </div>
        </div>
    );
};
