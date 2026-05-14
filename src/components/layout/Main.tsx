import { FC, ReactNode } from "react";

type MainProps = {
    children: ReactNode;
}

const Main: FC<Readonly<MainProps>> = ({ children }) => {
    return (
        <main className="mx-6 md:mx-20 py-6">{children}</main>
    )
}

export default Main;