import { FC, ReactNode } from "react";

type MainProps = {
    children: ReactNode;
}

const Main: FC<Readonly<MainProps>> = ({ children }) => {
    return (
        <main className="py-6">{children}</main>
    )
}

export default Main;